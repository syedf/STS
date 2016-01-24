var express = require('express'),
    app = express(),
    mongoClient = require('mongodb').MongoClient,
    config = require('./config'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

var environment = config.env || 'dev';
if(environment === 'dev')
    app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));

mongoClient.connect(config.mongoDbUrl, function (err, db) {
    if(err){
        console.error('Please check if mongod is running! \n\n now closing ...');
        process.exit(0);
    }
    console.log('connected to mongodb');
    // Define Routes here
    
    app.listen(config.port, function () {
        console.log('Listening to port '+config.port);
    });
});


