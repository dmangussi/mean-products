module.exports = function(app) {
  var controller = app.controllers.product;

  app.route('/products')
  		.get(controller.fetchProducts)
  		.post(controller.insertProduct);

  app.route('/products/:id')
  		.get(controller.fetchProductById)
  		.delete(controller.deleteProduct)
  		.put(controller.updateProduct);
};