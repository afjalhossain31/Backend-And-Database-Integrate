// "npm install express --save" added express in dependencies in package.json file

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// This is Routing in Express JS
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>Welcome to the About Page</h1>');
});

// This is API Endpoint for users data
const users = [
    { id: 1, name: 'Afjal Hossain', email: 'afjal@example.com' },
    { id: 2, name: 'Mehedi Hasan', email: 'mehedi@example.com' },
    { id: 3, name: 'Hafizur Rahman', email: 'hafizur@example.com' },
    { id: 4, name: 'Sabbir Hossain', email: 'sabbir@example.com' },
    { id: 5, name: 'Rafiq Hossain', email: 'rafiq@example.com' },
];

app.get('/users', (req, res) => {
    res.send(users);
});



app.get('/products', (req, res) => {
    res.send('<h1>Welcome to the Product Page</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});











// 200 --> OK 404 --> Not Found 500 --> Internal Server Error

// const http = require('http');
// const server = http.createServer((req, res) => {

//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>Welcome to the Home Page</h1>');
//     }
//     else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>Welcome to the About Page</h1>');
//     }
// });

// server.listen(5000, () => {
//     console.log('server is running on port 5000');
// });