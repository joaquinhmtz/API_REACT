const UserRoute 		= require('./user/user.route');
const PhotoRoute 		= require('./photos/photos.route');

module.exports = function (app, router) {
	UserRoute(app, router);
	PhotoRoute(app, router);
}
