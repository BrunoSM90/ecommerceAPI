module.exports.getProducts = function(application, req, res) {

	var connection = application.config.dbConnection;
	var produtosDao = new application.app.models.produtosDAO(connection);

	produtosDao.getProducts(res, res);
}

module.exports.insertProduct = function(application, req ,res) {
	var connection = application.config.dbConnection;
	var produtosDao = new application.app.models.produtosDAO(connection);

	produtosDao.insertProduct(req, res);
}