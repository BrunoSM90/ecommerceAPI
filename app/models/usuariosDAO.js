var crypto = require('crypto');

function usuariosDAO(connection) {
	this._connection = connection;
}

usuariosDAO.prototype.insertUser = function(req, res) {

		req.body.password = crypto.createHash('md5').update(req.body.password).digest('hex');

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

usuariosDAO.prototype.getUserAuth = function(req, res) {

		req.body.password = crypto.createHash('md5').update(req.body.password).digest('hex');

		var dados = {
		operation: 'getUserAuth',
		collection: 'users',
		data: req.body,
		response: res,
		}

this._connection(dados);

}



module.exports = function() {
	return usuariosDAO;
}