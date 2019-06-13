const express = require('express');
const server = express();
const cors = require('cors');
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('Hello World!');
});

const usersRouter = require('./users/usersRouter');
const noteEntriesRouter = require('./noteEntries/noteEntriesRouter');
const tagsRouter = require('./tags/tagsRouter');
const loginAndRegistrationRouter = require('./loginAndRegistration/loginAndRegistrationRouter');

server.use('/api/users', usersRouter);
server.use('/api/noteEntries', noteEntriesRouter);
server.use('/api/tags', tagsRouter);
server.use('/api', loginAndRegistrationRouter);

module.exports = server;