var products = [
	{
		_id: 1, 
		name: 'Product 1', 
		category: 'Category 1'
	},
	{
		_id: 2, 
		name: 'Product 2', 
		category: 'Category 2'
	},
	{
		_id: 3, 
		name: 'Product 3', 
		category: 'Category 3'
	}
];
var countProduct = 3;

var controller = {};

controller.fetchProducts = function(req, res) {

	res.json(products);	
};

controller.fetchProductById = function(req, res) {

	var product = products.find(function(product) {
		return product._id == req.params.id;
	});
	
	product ? res.json(product) : res.status(404).send('Product not found.');
};

controller.deleteProduct = function (req, res) {
	
	products = products.filter(function(product) {
		return product._id != req.params.id;
	});

	res.sendStatus(204);
};

controller.insertProduct = function(req, res) {

	var product = req.body;
	product._id = ++countProduct;
	products.push(product);

	res.json(product);
};

controller.updateProduct = function(req, res) {

	var product = req.body;
	var productId = req.params.id;

	var index = products.findIndex(function(product){
		return product._id == req.params.id;
	});

	products[index] = product;

	res.sendStatus(200);
}

module.exports = controller;