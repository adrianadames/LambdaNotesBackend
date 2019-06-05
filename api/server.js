const express = require('express');
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World!');
});

const usersRouter = require('./users/usersRouter');

server.use('/api/users', usersRouter);

module.exports = server;