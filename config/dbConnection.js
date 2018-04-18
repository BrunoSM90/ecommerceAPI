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
					res.send(result);
				}
			})
		return;

		case 'insertProduct':
			collection.insert(dados, function(err, result) {
				if(err) {
					console.log(err);
				} else {
					console.log(result);
				}
			})

		return;
	}
}

module.exports = function() {
	return connMongoDB;
}