var http = require('http');
var array = require('./stuff');
http.createServer(function(request, response) {
response.writeHead(200, {"content-type":"text-plain"});
response.write(array.lyric);
response.end();
}).listen(8888);
