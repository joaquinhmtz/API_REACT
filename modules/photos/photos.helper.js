const async_    = require('async');

function create(data, connection) {
  return new Promise(async (resolve, reject) => {
    let query = 'INSERT INTO PHOTOS SET ?';
    let files = data.files;
    let category = {id:1, description:'Familia'};
    let obj = {};

    try {
      async_.eachSeries(files, (item, cb) => {
        obj = {
          name : item.filename,
          description : 'Fotos de la familia peluche',
          url : item.path,
          idUser : 1,
          idCategory : category.id,
        };

        connection.query(query, obj, (err, response) => {
          if(err) reject(err);

          if(response) {
            cb();
          }
        });
      }, err => {
        if (err) return reject(err);
        resolve({ success:true });
      });
    } catch (e) {
      reject(e);
    }
  });
}

function deletePhoto(data, connection) {
  return new Promise( async(resolve, reject) => {
    let query = 'UPDATE PHOTOS SET ? WHERE id = ?';
    let obj = {
      active: false
    };

    try {
      connection.query(query, [obj, data.id], (err, response) => {
        if(err) reject(err);

        if(response) {
          resolve({ success: true, msg: 'Fotografía eliminada con éxito.' });
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

function updatePhoto(data, connection) {
  return new Promise( async(resolve, reject) => {
    let query = 'UPDATE PHOTOS SET ? WHERE id = ?';
    let obj = {
      idCategory : data.category.id,
      description : data.description
    };

    try {
      connection.query(query, [obj, data.id], (err, response) => {
        if(err) reject(err);

        if(response) {
          resolve({ success: true, msg: 'Fotografía actulizada correctamente' });
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

function list(data, connection) {
  return new Promise(async (resolve, reject) => {
    let query = ''
  });
}

module.exports = {
  create: create,
  deletePhoto: deletePhoto,
  updatePhoto: updatePhoto,
  list: list
};
