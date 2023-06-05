// Require express
const express = require('express');
const routes = require('./routes/index');
const conn = require('./controller/db/connection');

const app = express();
app.use('/', routes);

module.exports = app;