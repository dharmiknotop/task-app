const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//importing .env variables

require('dotenv').config({ path: './config/config.env' });

//applying middlewares for incoming request

app.use(
  cors({
    credentials: true,
    origin: '*',
  })
);
app.use(bodyParser.json());

// Route Imports
const create = require('./routes/createRoute');
const deleteTask = require('./routes/deleteRoute');
const read = require('./routes/readRoute');
const update = require('./routes/updateRoute');

app.use('/api/', read);
app.use('/api/', create);
app.use('/api/', update);
app.use('/api/', deleteTask);

module.exports = app;
