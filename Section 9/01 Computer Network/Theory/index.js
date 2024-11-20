const http = require('http');

// Define the server and specify the response for incoming requests
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set HTTP status code
    res.setHeader('Content-Type', 'text/plain'); // Set content type
    res.end('Hello, World!\n'); // Response body
});

// Define the port and start listening
const port = 3000;
server.listen( () => {
    console.log(server.address())
    console.log(`Server running at http://localhost:${port}/`);
});