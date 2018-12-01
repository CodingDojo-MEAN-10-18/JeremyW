const express = require("express");
const session = require('express-session');
const parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
// invoke express and store the result in the variable app
const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.get('/', (request, response) => {
//     console.log('getting to index');
//     response.render('index', { messages: chat, title: 'Group V2' });
// });

const sessionConfig = {
    secret: 'superSekretKitteh',
    resave: false,
    name: 'session',
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
};
app.use(session(sessionConfig));

// const server = app.listen(1337);
const server = app.listen(port, () => console.log(`Express server listening on port ${port}`));    // ES6 way
const io = require('socket.io')(server);

// load the routes file, pass app and server into it (for handling url visits and events)
require('./routes/index.js')(app, server);

// catch 404 and forward to error handler
app.use((request, response, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, request, response, next) => {
    // set locals, only providing error in development
    response.locals.message = err.message;
    response.locals.error = request.app.get('env') === 'development' ? err : {};
    response.status(err.status || 500);
    // render the error page
    response.render('error', {title: 'Error page'});
  });

// app.listen(port, () => console.log(`Express server listening on port ${port}`));    // ES6 way