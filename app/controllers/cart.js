module.exports.getCart = function(application, req, res) {

	var connection = application.config.dbConnection;
	var cartDao = new application.app.models.cartDAO(connection);

	cartDao.getCart(req, res);
}

module.exports.insertCart = function(application, req, res) {

	var connection = application.config.dbConnection;
	var cartDao = new application.app.models.cartDAO(connection);

	cartDao.insertCart(req, res);
}

module.exports.updateCart = function(application, req, res) {

	var connection = application.config.dbConnection;
	var cartDao = new application.app.models.cartDAO(connection);

	cartDao.updateCart(req, res);
}