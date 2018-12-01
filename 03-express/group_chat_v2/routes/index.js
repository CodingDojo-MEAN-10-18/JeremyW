const users = [];
const messages = [];

function isUser(user) {
    const usersCount = users.length;

    for (var i = 0; i < usersCount; i++) {
        if (user == users[i]) {
        return true;
        }
    }
    return false;
}

module.exports = function Route(app, server) {
    const io = require("socket.io").listen(server)

    io.sockets.on('connection', function(socket) {
        socket.on('page_load', function(data) {
            const existingUser = isUser(data.user);
            const event = existingUser ? 'existing_user' : 'load_messages';
            var data = existingUser ? {
                error: 'This user already exists.'
                } : { current_user: data.user, messages: messages };

            if (!existingUser) {
                users.push(data.user);
            }

            socket.emit(event, data);
        });

        socket.on('new_message', function(data) {
            messages.push({ name: data.user, message: data.message });
            io.emit('post_new_message', { new_message: data.message, user: data.user });
        });
    });

    app.get('/', (request, response) => {
        console.log('getting to index');
        response.render('index', { title: 'Group Chat V2' });
    });
};