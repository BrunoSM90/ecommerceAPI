module.exports.insertUser = function(application, req ,res) {

	var connection = application.config.dbConnection;
	var usuariosDao = new application.app.models.usuariosDAO(connection);

	usuariosDao.insertUser(req, res);
}

module.exports.getUser = function(application, req ,res) {

	var connection = application.config.dbConnection;
	var usuariosDao = new application.app.models.usuariosDAO(connection);

	usuariosDao.getUser(req, res);
}