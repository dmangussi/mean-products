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

module.exports = function() {
	
	var controller = {};
	controller.fetchProducts = function(req, res) {
		res.json(products);
	};
	
	controller.fetchProductById = function(req, res) {
		
		var id = req.params.id;
		
		var product = products.filter(function(product) {
			return product._id == id;
		})[0];
		
		product ?  res.json(product) : res.status(404).send('Product have not found');
	};
	
	return controller;
};