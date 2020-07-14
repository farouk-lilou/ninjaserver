// make a connection 
// creation a socket for the frontend 
const socket = io.connect('http://localhost:3000'); 


// Query DOM

var message = document.getElementById('message') ; 
var handle = document.getElementById('handle') ; 
var send = document.getElementById('send') ; 
var output  = document.getElementById('output') ; 


send.addEventListener('click' , function(){
    socket.emit('chat-message' , { 
        message : message.value , 
        handle : handle.value
    })
}); 

socket.on('chat-message' , function(data){
    output.innerHTML += '<p><strong>' + data.handle +
    ' : </strong>' + data.message + '</p>';
})