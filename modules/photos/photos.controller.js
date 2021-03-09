let helper     = require('./photos.helper');

async function create(req, res, next) {
  let obj = {
    data : req.body,
    files : req.files
  };
  let connection = req.pool;

  try {
    let result = await helper.create(obj, connection);

    return res.status(200).send(result);
  } catch (e) {
  } return res.status(400).send(e);
}

async function deletePhoto(req, res, next) {
  let connection = req.pool;
  let data = req.body;

  try {
    let result = await helper.deletePhoto(data, connection);

    return res.status(200).send(result);
  } catch (e) {
    return res.status(400).send(e);
  }
}

async function updatePhoto(req, res, next) {
  let connection = req.pool;
  let data = req.body;

  try {
    let result = await helper.deletePhoto(data, connection);

    return res.status(200).send(result);
  } catch (e) {
    return res.status(400).send(e);
  }
}

async function list(req, res, next) {
  let connection = req.pool;
  let data = req.body;

  try {
    let result = await helper.list(data, connection);

    return res.status(200).send(result);
  } catch (e) {
    return res.status(400).send(e);
  }
}

module.exports = {
  create: create,
  deletePhoto: deletePhoto,
  updatePhoto: updatePhoto,
  list: list
};
