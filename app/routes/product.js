module.exports = function(app) {
  var controller = app.controllers.product;

  app.get('/produts', controller.fetchProducts);

  app.route('/produts/:id')
  		.get(controller.fetchProductById)
  		.delete(controller.deleteProduct);
};