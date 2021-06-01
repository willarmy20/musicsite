const socket = io();

let chatName = document.getElementById('chat-username');
let chatMessage = document.getElementById('chat-message');
let chatForm = document.getElementById('chatForm');

chatForm.addEventListener('submit',(e) => {
    let chatForm = document.getElementById('chatForm');
    e.preventDefault();
    socket.emit('postMessage',{
        username:chatName.value,
        message:chatMessage.value
    })
})

socket.on('updateMessage',(data) => {
    let chatDisplay = document.querySelector('#chat-display');
    let newMessage = document.createElement('p');
    newMessage.innerHTML = `<strong>${data.username}</strong>:${data.message}`;
    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);


})


