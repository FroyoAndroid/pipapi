// Importing Node modules and initializing Express
const express = require('express'),
    favicon = require('express-favicon'),
    app = express(),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./config/main'),
    router = require('./router'),
    cors = require('cors');

const server = app.listen(config.port);
console.log('Your server is running on port ' + config.port + '.');

// Setting up basic middleware for all Express requests
app.use(logger('dev')); // Log requests to API using morgan
app.use(favicon(__dirname + '/public/favicon.ico'));

// Enable CORS from client-side
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(cors());
// parse application/json
app.use(bodyParser.json());

// Database Connection
const connection = mongoose.connect(config.database, function (err) {
    if (err) throw err;
    // logger.de('Successfully connected to MongoDB');
});

router(app);