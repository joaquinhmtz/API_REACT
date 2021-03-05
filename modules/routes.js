const UserRoute = require('./user/user.route');

module.exports = function (app, router) {
	UserRoute(app, router);
}
