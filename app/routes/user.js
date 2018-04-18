module.exports = function(application) {
	application.post('/user', function(req, res) {
		application.app.controllers.users.insertUser(application, req, res);
	});

	application.get('/user', function(req, res) {
		application.app.controllers.users.getUser(application, req, res);
	});
}