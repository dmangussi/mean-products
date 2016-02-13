var app = require('./config/express')();

var server = app.listen(app.get('port'), function() {
	console.log('The server was started', server.address().port);
});