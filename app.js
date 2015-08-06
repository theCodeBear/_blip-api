'use strict';

var express = require('express'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
var app = express();

// running some basic Express middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// middleware
var middleware = require('./config/middleware');
app.use(middleware.beforeAll);
app.use(middleware.cors);

// link to the routes file which links to all the individual routes
require('./config/routes')(app);

// connect to mongo
mongoose.connect('mongodb://localhost/blip');

// run Express web server
var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('serving on port %s', port);
});

module.exports = app;
