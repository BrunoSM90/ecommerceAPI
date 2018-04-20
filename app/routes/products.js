module.exports = function(application) {
	application.get('/products', function(req, res) {
		application.app.controllers.products.getProducts(application, req, res);
	});

	application.post('/products', function(req, res) {
		application.app.controllers.products.insertProduct(application, req, res);
	});

	application.get('/products/tax', function(req, res) {
		application.app.controllers.products.getTax(application, req, res);
	});
}