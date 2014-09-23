require! WebSocket: ws

socket = new WebSocket 'wss://entryforex.com/stream/', null, {rejectUnauthorized: false}

# socket.on 'open' (void) !-> socket.send "\{\"type\": \"logon\", \"authProvider\": \"local\", \"sessionId\": \"d07b883d-1436-45ab-a661-48b9ec5b4afb\"\}";
socket.on 'open' (void) !-> socket.send JSON.stringify({"type": "logon", "authProvider": "local", "sessionId": "d07b883d-1436-45ab-a661-48b9ec5b4afb"});

socket.on 'message' (message) !-> console.log 'recieved: %s' message

socket.on 'close' (void) !-> console.log 'Connection is closed...'