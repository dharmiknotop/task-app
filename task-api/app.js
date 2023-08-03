const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//importing .env variables

require('dotenv').config({ path: 'task-api/config/config.env' });

//applying middlewares for incoming request

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// Route Imports
const create = require('./routes/createRoute');
const deleteTask = require('./routes/deleteRoute');
const read = require('./routes/readRoute');
const upadate = require('./routes/upadateRoute');

app.use('/api/', read);
app.use('/api/', create);
app.use('/api/', upadate);
app.use('/api/', deleteTask);

module.exports = app;
