const express = require("express");
const session = require('express-session');
const parser = require('body-parser');
const path = require('path');
const querystring = require('querystring');

const port = process.env.PORT || 8001;
// invoke express and store the result in the variable app
const app = express();

// const server = app.listen(1337);
const server = app.listen(port, () => console.log(`Express server listening on port ${port}`));    // ES6 way
const io = require('socket.io')(server);

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(express.static(path.join(__dirname, "/static")));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

var counter = 0;
var logged_in_users = [];

app.get('/', function (request, response) {
    response.render('index', {title: 'Group chat v3'});
});

io.on('connection', function (socket) {
    
    socket.on('signed_on', function (data) { 
        data = {
            name: data,
            id: counter++,
            socket: socket.id
        }
        console.log(socket.id)
        logged_in_users.push(data)
        io.emit('new_user', data);
    });
    
    socket.on('all', function () { 
        socket.emit('all', logged_in_users);
    });
    
    /* app.io.route('all', function () { 
        socket.emit('all', logged_in_users);
    }); */
    
    socket.on('disconnect', function () {
        console.log(socket.id)
        for(let i = 0; i < logged_in_users.length; i++){
            if(logged_in_users[i].socket == socket.id){
                logged_in_users.splice(i, 1)
            }
        }
        console.log(logged_in_users)
        socket.broadcast.emit('user_disconnect', socket.id);
    });
    
});