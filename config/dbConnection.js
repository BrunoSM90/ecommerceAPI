var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
var assert = require('assert');

const url = 'mongodb://localhost:27017'
const dbName = 'ecommerce'

var connMongoDB = function(dados) {
	mongo.connect(url, function(err, client) {
		assert.equal(null, err);
		const db = client.db(dbName);
		query(db, dados);
		client.close();
	})
}

function query(db, dados) {
	var collection = db.collection(dados.collection);

	switch(dados.operation) {

		case 'getProducts':
			collection.find().toArray(function(err, result) {
				if(err) {
					console.log(err);
				} else {
					var res = dados.response;
					res.json(result);
				}
			})
		return;

		case 'getUser':
			collection.find().toArray(function(err, result) {
				if(err) {
					console.log(err);
				} else {
					var res = dados.response;
					res.json(result);
				}
			});
		return;

		case 'insertUser':
			collection.insert(dados.data, function(err, result) {
				if(err) {
					console.log(err);
				} else {
					var res = dados.response;
					res.json({msg: 'Usuário inserido com sucesso', id: result.insertedIds});
				}
			});
		return;

		case 'getTax':
			collection.find().toArray(function(err, result) {
				if(err) {
					console.log(err);
				} else {
					var res = dados.response;
					res.json(result);
				}
			});
		return;

		case 'insertCart':
			collection.insert({id_usuario: dados.id, produtos: []}, function(err, result) {
				if(err) {
					console.log(err);
				} else {
					var res = dados.response;
					res.json(result);
				}
			});
		return;

		case 'updateCart':
			collection.findOneAndUpdate({id_usuario: dados.id}, {$push: {produtos: dados.item}}, function(err, result) {
				if(err) {
					console.log(err);
				} else {
					var res = dados.response;
					res.json(result.value.produtos);
				}
			});
		return;

		case 'getCart':
			collection.find({id_usuario: {$eq: dados.id}}).toArray(function(err, result) {
				if(err) {
					console.log(err);
				} else {
					var res = dados.response;
					res.send(result[0].produtos);
				}
			});
		return;
	}
}

module.exports = function() {
	return connMongoDB;
}