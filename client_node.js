var WebSocket = require('ws');
// ws = new WebSocket('ws://localhost:8081');
socket = new WebSocket('wss://entryforex.com/stream/', null, {rejectUnauthorized: false});

socket.on('open', function()	{
	console.log("connected!");
	socket.send("\{\"type\": \"logon\", \"authProvider\": \"local\", \"sessionId\": \"d07b883d-1436-45ab-a661-48b9ec5b4afb\"\}");
});
socket.on('message', function(message)	{
	console.log('recieved: %s', message);
});
socket.on('close', function()	{ 
	console.log("Connection is closed..."); 
});