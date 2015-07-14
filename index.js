var server = require('./server_export');
var route = require('./route.js').route;
var requestHandler = require('./requestHandler');

var handler = {};
handler['/'] = requestHandler.start;
handler['/start'] = requestHandler.start;
handler['/upload'] = requestHandler.upload;

server.start(route, handler);