const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//importing .env variables

require('dotenv').config({ path: './config/config.env' });

//applying middlewares for incoming request

app.use(bodyParser.json());

app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:3000',
      'https://bright-mandazi-0d8def.netlify.app/',
      'bright-mandazi-0d8def.netlify.app/',
      'bright-mandazi-0d8def.netlify.app',
      'https://bright-mandazi-0d8def.netlify.app/',
    ],
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  })
);

app.all('/api/*', function (req, res, next) {
  const origin = req.header('origin');
  res.header('Access-Control-Allow-Origin', origin);
  next();
});

app.use(function (req, res, next) {
  // Enabling CORS
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization'
  );
  next();
});

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
