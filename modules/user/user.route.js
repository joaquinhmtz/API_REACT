const UserController 		= require('./user.controller');
const passport 					= require('passport');
require('./../../config/passport');

module.exports = function (app, router) {
	router.route('/users/list').post(UserController.list);
	router.route('/users/create').post(UserController.create);
	router.route('/users/login').post(UserController.login);
	router.route('/users/update').post(UserController.edit);
}
