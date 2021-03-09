const PhotoController 		= require('./photos.controller');
const multer              = require('multer');
const path                = require('path');
const rootPath            = path.normalize(__dirname + '/../..');
const pathUploads         = rootPath + '/public/uploads/';
const storage             = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, pathUploads)
  },
  filename: function (req, file, cb) {
    const type = file.mimetype.slice(6);
    const fieldname = Date.now().toString() + '.' + type;
    cb(null, fieldname)
  }
})
const upload              = multer({ storage: storage });

module.exports = function (app, router) {
  router.route('/photos/create').post(upload.array('photos', 15), PhotoController.create);
  router.route('/photos/delete').post(PhotoController.deletePhoto);
  router.route('/photos/update').post(PhotoController.updatePhoto);
  router.route('/photos/list').post(PhotoController.list);
}
