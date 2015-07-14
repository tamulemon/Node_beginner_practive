var http = require('http');
var url = require('url');
//var route = require('./route.js').route;
var port = process.env.port || 8080;

function start(route, handler) {
	var server = http.createServer(function(req,res) {
		var pathName = url.parse(req.url).pathname; 
		console.log('request for ' + pathName +' is received');
		route(handler, pathName, res);
//		res.writeHead(200, {'Content-Type' : 'text/html'});
//		res.write('hello world');
//		res.end();
	});

	server.listen(port, function() {
		console.log('server is running');
	});
}

exports.start = start;
