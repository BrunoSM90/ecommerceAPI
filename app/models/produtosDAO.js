function produtosDAO(connection) {
	this._connection = connection;
}

produtosDAO.prototype.getProducts = function(req, res) {

		var dados = {
		operation: 'getProducts',
		collection: 'products',
		response: res,
		}

this._connection(dados);

}

produtosDAO.prototype.insertProduct = function(req, res) {

		var dados = {
		operation: 'insertProducts',
		collection: 'products',
		data: {

		},
		response: res,
		}

this._connection(dados);

}

module.exports = function() {
	return produtosDAO;
}