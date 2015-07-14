function route(handler, pathname, res) {
	console.log('route for ' + pathname);
	if (typeof(handler[pathname]) === 'function' ) {
		handler[pathname](res);
	} else {
		console.log('no handler for ' + pathname);
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.write('404 not found');
		res.end();
	}
}

exports.route = route;