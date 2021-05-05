
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

var userCount = 1;

app.use(express.static("../client/public"));

app.get('/', function(req, res) {
   res.sendFile('index.html');
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   userCount++;
   
   



   


});


server.listen(port, function() {
   console.log(`listening on port ${port}`);
});
