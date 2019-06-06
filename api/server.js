const express = require('express');
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World!');
});

const usersRouter = require('./users/usersRouter');
const noteEntriesRouter = require('./noteEntries/noteEntriesRouter');

server.use('/api/users', usersRouter);
server.use('/api/noteEntries', noteEntriesRouter);

module.exports = server;