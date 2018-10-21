//  Assignment: Cars and Cats
// We are going to make another node server in this assignment, but we are going to complicate it. Create a folder called cars_and_cats, this will be your root folder for this project.  Within this folder, create:

// A file called app.js.  This is where you will build your node server.
// A folder called views.  This is where you will keep your HTML files.
// A folder called images for images.
// A folder called stylesheets for CSS.

// Your server must be capable of handling the following URL requests:

// 1.  Have localhost:7077/cars go to a simple HTML page that shows some cool pictures of different cars.  These car pictures should be stored in your images folder on your server.  DON'T just link to pictures of cars stored somewhere else!!
// 2.  Have localhost:7077/cats show a simple HTML page with some cool pictures of cats.  Again, make sure these pictures are stored on your server.
// 3.  Have localhost:7077/cars/new show a simple form where the user can add a new car information. For the /cars/new HTML page, no need to store this information in the database nor is there a need to validate the entries. Simply have the form there.


// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            console.log('Welcome to the web server');
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    } else if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            console.log('Welcome to the web server');
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cars/new") {
         fs.readFile('views/add.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/cats") {
         fs.readFile('views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/css/styles.css") {
         fs.readFile('css/styles.css', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-Type': 'text/css'});
             response.write(contents); 
             response.end();
         });
    }
    else if(request.url === '/images/car1.jpg'){
        fs.readFile('images/car1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car2.jpg'){
        fs.readFile('images/car2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car3.jpg'){
        fs.readFile('images/car3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car4.jpg'){
        fs.readFile('images/car4.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat1.jpg'){
        fs.readFile('images/cat1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat2.jpg'){
        fs.readFile('images/cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cat3.jpg'){
        fs.readFile('images/cat3.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cat4.jpg'){
        fs.readFile('images/cat4.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    // request didn't match anything:
    else {
        fs.readFile('views/error.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        // response.end('File not found!!!');
        });
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");