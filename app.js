const express = require('express');
const app = express();
let port = process.env.PORT || 3000;
const socket = require('socket.io');

//public
app.use(express.static('public'));//this is where static assest go css,images,videos
//views
app.set('view engine', 'ejs');

//routes
app.use(require('./routes/landingpage'));
app.use(require('./routes/index'));
app.use(require('./routes/albums'));
app.use(require('./routes/feedback'));
app.use(require('./routes/chat'));



//server start
let server = app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})
    
let io = socket(server);
io.on('connection',(socket) => {
    socket.on('postMessage', msg =>{
        io.emit('updatemessage',msg)
    })
})