const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 3000;

var vigits = 0;

app.use(express.urlencoded({
  extended: true
}))




var person = {}

app.get("/kitneaadmithe" , function(req,res){
  res.send("no of vigits are " +vigits)
})

app.get("/rasodemekauntha" , function(req,res){
  console.log("rasodemekauntha==-----------------------");
  res.send(person)
})

app.get('/*', (req, res) => {
  vigits = vigits+1;
  res.sendFile(__dirname + '/index.html');

});




app.post('/send',function(req,res){
  var id = req.params.id
  var heading = req.body.heading
  var icon = req.body.icon
  var data = req.body.data
  const ip = req.body.ip
  var content = { heading: heading, icon: icon , data : data}
  console.log("/:id " + ip);
  // io.to(id).emit("log", "hi there");
  // io.broadcast("log", "hi there");
  // io.sockets.emit('log',"{ description: clients + ' clients connected!'}");
  person[ip].socket.emit('log', JSON.stringify(content) );
  res.send("SUCCESS");
});

app.post('/*',function(req,res){

  res.send("no such page");
});

io.configure(function () {
  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 10);
});



io.on('connection', (socket) => {

  // var userId = socket.handshake.query['id'];
  var client_ip_address = socket.request.connection.remoteAddress;
  var connectedUser = {id:client_ip_address, socket:socket}
  console.log("--------------------------------------------------------------------");
  console.log(connectedUser);

  person[client_ip_address] = connectedUser
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.listen(process.env.PORT || port,function()
{
    console.log("server has been started on PORT no "+ port);
});
