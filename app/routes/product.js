module.exports = function(app) {
  var controller = app.controllers.product;

  app.get('/produts', controller.fetchProducts);
  app.get('/produts/:id', controller.fetchProductById);
};