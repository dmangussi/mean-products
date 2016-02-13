var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();
	
	app.set('port', process.env.PORT || 3000);
	app.set('view engine', 'ejs');
	app.set('views','./app/views');
	
	app.use(express.static('./public'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	
	app.use(require('method-override')())
	
	consign({cwd: 'app'})
		.include('models')
		.then('controllers')
		.then('routes')
		.into(app);
		
	return app;
};