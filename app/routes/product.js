module.exports = function(app) {
  var controller = app.controllers.product;

  app.route('/produts')
  		.get(controller.fetchProducts)
  		.post(controller.insertProduct);

  app.route('/produts/:id')
  		.get(controller.fetchProductById)
  		.delete(controller.deleteProduct)
  		.put(controller.updateProduct);
};