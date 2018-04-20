module.exports = function(application) {
	application.get('/cart/:id', function(req, res) {
		application.app.controllers.cart.getCart(application, req, res);
	});

	application.post('/cart', function(req, res) {
		application.app.controllers.cart.insertCart(application, req, res);
	});

	application.put('/cart', function(req, res) {
		application.app.controllers.cart.updateCart(application, req, res);
	});
}