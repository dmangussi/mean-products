angular.module('app').controller('ProductsController', function ($scope, $http) {
	
	$http.get('/products')
	.success(function(products) {
		$scope.products = products;
	})
	.error(function(err){
		console.log(err);
	});	
})