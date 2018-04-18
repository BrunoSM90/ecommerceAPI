function usuariosDAO(connection) {
	this._connection = connection;
}

usuariosDAO.prototype.insertUser = function(req, res) {

		var dados = {
		operation: 'insertUser',
		collection: 'users',
		data: req.body,
		response: res,
		}

this._connection(dados);

}


usuariosDAO.prototype.getUser = function(req, res) {

		var dados = {
		operation: 'getUser',
		collection: 'users',
		response: res,
		}

this._connection(dados);

}



module.exports = function() {
	return usuariosDAO;
}