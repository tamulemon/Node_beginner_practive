var exec = require("child_process").exec;

function start(res) {
	console.log("Request handler 'start' was called.");
	exec('1st', function(err, stdout, stderr) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write(stdout);
		res.end();
	});
}

function upload(res) {
 console.log("Request handler 'upload' was called.");
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('hello upload');
	res.end();
 }

exports.start = start;
exports.upload = upload;