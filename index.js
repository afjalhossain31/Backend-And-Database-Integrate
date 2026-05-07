// 200 --> OK 404 --> Not Found 500 --> Internal Server Error 
const http = require('http'); 

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the Home Page</h1>');
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the About Page</h1>');
    }
});

server.listen(5000, () => {
    console.log('server is running on port 5000');
});