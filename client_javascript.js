//var socket = new WebSocket("ws://localhost:8081");
//https.globalAgent.options.secureProtocol = 'SSLv3_method'
var socket = new WebSocket("wss://entryforex.com/stream/", null, {rejectUnauthorized: true});

socket.onopen = function(event)   {
	document.write("Connected!");
    //socket.send("\{\"type\": \"logon\", \"authProvider\": \"local\", \"sessionId\": \"d07b883d-1436-45ab-a661-48b9ec5b4afb\"\}");
}

socket.onmessage = function(event)   {
    //console.log(event);
    document.write("<h1>Server send to you: </h1>");
    document.write(event.data);
}

socket.onclose = function(event)   {
    //console.log(event);
    document.write("Connection close:");
}
