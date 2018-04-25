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
	console.log('reqbody ' + JSON.stringify(req.body));
		var dados = {
		operation: 'insertProduct',
		collection: 'products',
		data: req.body,
		response: res,
		}

// this._connection(dados);

}

produtosDAO.prototype.getTax = function(req, res) {

		var dados = {
		operation: 'getTax',
		collection: 'tax',
		response: res,
		}

 this._connection(dados);

}

module.exports = function() {
	return produtosDAO;
}