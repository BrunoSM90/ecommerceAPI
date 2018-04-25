function cartDAO(connection) {
	this._connection = connection;
}

cartDAO.prototype.getCart = function(req, res) {

		var dados = {
		operation: 'getCart',
		collection: 'cart',
		response: res,
		id: req.params.id
		}

this._connection(dados);

}

cartDAO.prototype.insertCart = function(req, res) {

		var dados = {
		operation: 'insertCart',
		collection: 'cart',
		response: res,
		id: req.body[0],
		}

this._connection(dados);

}

cartDAO.prototype.updateCart = function(req, res) {

		var dados = {
		operation: req.body.operation,
		collection: 'cart',
		response: res,
		id: req.body.user,
		item: req.body.item
		}

this._connection(dados);

}

module.exports = function() {
	return cartDAO;
}