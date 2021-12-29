const express = require('express');
const app = express();

// Defining all the routes
const index = require('./routes/index');
const users = require('./routes/users');

// Linking all the routes
app.use('/', index);
app.use('/users', users);

module.exports = app;
