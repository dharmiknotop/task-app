const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');

require('dotenv').config({ path: 'task-api/config/config.env' });

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Route Imports
const create = require('./routes/createRoute');
const deleteTask = require('./routes/deleteRoute');
const read = require('./routes/readRoute');
const upadate = require('./routes/upadateRoute');

app.use('/api/v1', read);
app.use('/api/v1', create);
app.use('/api/v1', upadate);
app.use('/api/v1', deleteTask);

module.exports = app;
