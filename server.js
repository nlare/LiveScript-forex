/*var http = require('http');
http.createServer(function (req, res) {
    console.log("Request recieved.");
    res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
    res.end('Hello from Hello World.\n');
    
}).listen(9080, "localhost");
*/

var WebSocketServer = new require('ws');

// connected clients
var clients = {};

/* WebSocket-server on port 8081*/
var webSocketServer = new WebSocketServer.Server({port: 8081});

webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  console.log("new connection: " + id);

  ws.on('message', function(message) {
    console.log('message recieved: ' + message);

    for(var key in clients) {
      clients[key].send(message);
    }
  });

  ws.on('close', function() {
    console.log('connection is closed: ' + id);
    delete clients[id];
  });

});