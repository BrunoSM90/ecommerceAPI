module.exports.getProducts = function(application, req, res) {

	var connection = application.config.dbConnection;
	var produtosDao = new application.app.models.produtosDAO(connection);

	produtosDao.getProducts(req, res);
}

module.exports.insertProduct = function(application, req ,res) {
	var connection = application.config.dbConnection;
	var produtosDao = new application.app.models.produtosDAO(connection);

	produtosDao.insertProduct(req, res);
}

module.exports.getTax = function(application, req ,res) {
	var connection = application.config.dbConnection;
	var produtosDao = new application.app.models.produtosDAO(connection);

	produtosDao.getTax(req, res);
}