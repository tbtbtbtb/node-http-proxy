var http = require('http');
var httpProxy = require('./lib/http-proxy');
var proxy = httpProxy.createProxyServer({});

http.createServer(function(req, res) {
    proxy.web(req, res, { target: 'http://10.23.178.130' });
}).listen(8080);
