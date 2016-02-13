module.exports = function() {
	var controller = {};
	controller.index = function(req, res) {
		//res.render('index', {nome: 'Express'});
		res.sendFile('./public/index.html');
	};
	return controller;
}