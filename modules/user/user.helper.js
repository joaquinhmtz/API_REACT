const bcrypt    = require('bcryptjs');

function createUser(data, connection) {
  return new Promise(async (resolve, reject) => {
    try {
      connection.connect((err) => {
        if(err) reject(err);
      });

      let user = await findUserByEmail(data, connection);

      if(!user.success) {
        let register = await registerUser(data, connection);

        if(register.idUser) {
          data.userId = register.idUser;

          let account = await createAccount(data, connection);
          if(account.success) {
            resolve({ success: true, msg: 'Usuario registrado con éxito.' });
          }
        }

      } else {
        resolve({ success: false, msg: 'Este usuario ya se encuentra registrado.' });
      }
    } catch(e) {
      reject(e);
    }
  });
}

function editUser(data, connection) {
  return new Promise(async (resolve, reject) => {
    let query = 'UPDATE USERS SET ? WHERE id = ?';
    let fullname = data.name + ' ' + data.lastname + ' ' + (data.lastname2?data.lastname2:'');
    let obj = {
      name : data.name,
      lastname : data.lastname,
      lastname2 : data.lastname2,
      fullname : fullname
    }

    try {
      connection.query(query, [obj, data.id], (err, response) => {
        if(err) reject(err);

        if(response) {
          resolve({ success: true, msg: 'Usuario actulizado con éxito.' });
        }
      });
    } catch(e) {
      reject(e);
    }
  });
}

function findUserByEmail(data, connection) {
  return new Promise((resolve, reject) => {
    let query = 'SELECT * FROM USERS WHERE EMAIL = "' + data.email + '";';

    try {
      connection.query(query, (err, response) => {
        if(err) reject(err);

        if(response.length > 0) resolve({ success: true, response: response });
        else if (response.length <= 0) resolve({ success: false });
      });
    } catch(e) {
      reject(e);
    }
  });
}

function registerUser(data, connection) {
  return new Promise((resolve, reject) => {
    let query = 'INSERT INTO USERS SET ? ';
    let obj = {};

    try {
      obj = {
        name : data.name,
        lastname : data.lastname,
        lastname2 : (data.lastname2 ? data.lastname2 : null),
        email : data.email,
        fullname : data.name + ' ' + data.lastname + ' ' + (data.lastname2 ? data.lastname2 : '')
      };

      connection.query(query, obj, (err, response) => {
        if(err) reject(err);

        resolve({ success: true, idUser: response.insertId });
      });
    } catch(e) {
      reject(e);
    }
  });
}

function createAccount(data, connection) {
  return new Promise((resolve, reject) => {
    let query = 'INSERT INTO ACCOUNTS SET ? ';
    let obj = {};
    let salt = bcrypt.genSaltSync(10);

    try {
      obj = {
        idUser : data.userId,
        email : data.email,
        password : bcrypt.hashSync(data.password, salt)
      };

      connection.query(query, obj, (err, response) => {
        if(err) reject(err);

        delete obj.password;
        resolve({ success: true, user : obj });
      });

    } catch(e) {
      reject(e);
    }
  });
}

function comparePasswordHash(data, connection) {
  return new Promise(async (resolve, reject) => {
    let query = 'SELECT * FROM ACCOUNTS WHERE EMAIL = "' + data.email + '";';

    try {
      connection.query(query, (err, response) => {
        if(err) reject(err);

        if(response.length >= 1) {
          let account = response[0];

          bcrypt.compare(data.password, account.password, (err, match) => {
            if(err) reject(err);

            resolve({ success: true, valid: match });
          });
        } else {
          resolve({ success: false, valid: false });
        }

      });
    } catch (e) {
      reject(err);
    }
  });
}

function getList(data, connection) {
  return new Promise(async (resolve, reject) => {
    let query = 'SELECT * FROM USERS WHERE ';
    let getQueryParams = getQuery(data.filters);

    query += getQueryParams;

    try {
      connection.query(query, (err, response) => {
        if(err) reject(err);

        resolve(response);
      });
    } catch (e) {
        reject(err);
    }
  });
}

function getQuery(params) {
  let query = '(';

  if(params.email) {
    query += 'email LIKE "%' + params.email + '%" ';
  }

  if(params.fullname) {
    if(params.email) query += 'AND ';
    query += 'fullname LIKE "%' + params.fullname + '%"';
  }

  query += ');';

  return query;
}

function editPassword(data, connection) {
  return new Promise((resolve, reject) => {
    let query = 'UPDATE ACCOUNTS SET ? WHERE idUser = ?';
    let salt = bcrypt.genSaltSync(10);
    let obj = {
      password : bcrypt.hashSync(data.password, salt)
    };

    try {
      connection.query(query, [obj, data.id], (err, response) => {
        if(err) reject(err);

        if(response) {
          resolve({ success: true, msg: 'Contraseña actulizada con éxito.' });
        }
      });
    } catch (e) {

    } finally {

    }
  });
}

module.exports = {
  createUser: createUser,
  findUserByEmail : findUserByEmail,
  comparePasswordHash: comparePasswordHash,
  getList : getList,
  editUser : editUser,
  editPassword : editPassword
};
