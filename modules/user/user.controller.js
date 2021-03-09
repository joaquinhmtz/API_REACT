const mysql           = require('mysql');
const util            = require('util');
const jwt             = require('jsonwebtoken');
const passport        = require('passport');
const helper          = require('./user.helper');
const initPassport    = require('./../../config/passport').initPassport();

async function list(req, res, next) {
  let result = [];
  let pool = req.pool;
  let params = req.body;

  let results = await helper.getList(params, pool);

  return res.status(200).send({ data: results });
}

async function create(req, res, next) {
  let data = req.body;
  let pool = req.pool;
  let result = '';

  try {
    result = await helper.createUser(data, pool);
  } catch (e) {
    return res.status(400).send(err);
  } finally {
    return res.status(200).send(result);
  }
}

async function edit(req, res, next) {
  let data = req.body;
  let connection = req.pool;
  let result = '';
  let resultPass = '';

  try {
    result = await helper.editUser(data, connection);

    if(data.password) {
      resultPass = await helper.editPassword(data, connection);
    }

  } catch (e) {
    return res.status(400).send(err);
  } finally {
    return res.status(200).send(result);
  }
}

async function login(req, res, next) {
  passport.authenticate('localLogin', async function (err, user, info) {
    let connection = req.pool;

    try {
      if (user && info.valid) {
        let result = await helper.findUserByEmail(info, connection);

        if(result.success) {
          let data = {
            user : {
              id: result.response[0].id,
              name: result.response[0].name,
              lastname: result.response[0].lastname,
              lastname2: result.response[0].lastname2,
              email: result.response[0].email,
              creation_date: result.response[0].creation_date
            }
          };
          let token = '';
          token = jwt.sign(data.user, global.config.secret);

          return res.status(200).send({ user : data.user, token : token });
        }
      } else {
        return res.status(400).send({ success: false, msg: 'Credenciales no válidas.' });
      }
    } catch (e) {
      return res.status(400).send({ success: false, msg: `${e}` });
    }
  })(req, res, next);
}

module.exports = {
	list: list,
  create: create,
  login: login,
  edit: edit
};
