const express = require('express');
const socket = require('socket.io');
// app setup (creating express app here)
const port = process.env.PORt || 3000 ;
const app = express();
// Static files 
app.use(express.static('public/'))
const server = app.listen( port , function() { 
    console.log(`lestening to requests on port ${port}`);
}) 

// socket setup (creation io server it takes as paramiter a server )  
const io = socket(server);
// LESTNIN FOR CLIENTS(browser window ) connections
io.on('connection' , (socket)=> {
    console.log('new connection happend'); 
    socket.on('chat-message' , function(data){ 
         console.log('data :>> ', data);
         io.sockets.emit('chat-message' , data);
    });
})