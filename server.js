'use strict';

var express = require('express'); // charge ExpressJS
var serveIndex = require('serve-index');

var ws = require('./webservice.js');
var app = express();

app.use('/ws/', ws);
app.use(express.static('.'));
app.use(serveIndex('.', {
	icons: true
}));

<<<<<<< HEAD
app.use('/app/', function(req, res, next) {
	console.log('url rewriting', req.url);
	res.sendFile('/app/index.html', {
		root: __dirname
	});
});

app.use(function(req, res, next) {
	console.log('404: Page non trouvee!!', req.url);
	next();
});



=======
app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.use('/app/', function(req, res, next) {
	console.log('url rewriting', req.url);
	res.sendFile('/app/index.html', {
		root: __dirname
	});
});

>>>>>>> 50cf094f889fcb4154d0a3c3ddd7e979e761e8f5
app.listen(8000, function() {
	console.log('server started on port 8000');
});
