const express = require('express');
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World!');
});

const usersRouter = require('./users/usersRouter');
const noteEntriesRouter = require('./noteEntries/noteEntriesRouter');
const tagsRouter = require('./tags/tagsRouter');

server.use('/api/users', usersRouter);
server.use('/api/noteEntries', noteEntriesRouter);
server.use('/api/tags', tagsRouter);

module.exports = server;