var express = require('express'),
    app = express(),
    mongoClient = require('mongodb').MongoClient,
    config = require('./config'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    favicon = require('serve-favicon'),
	open = require('opn'),
    moviesDbAdapter = require('./server/adapters/moviesDbAdapter');

var environment = config.env || 'production';
if(environment === 'development')
    app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use(favicon(__dirname+'/public/favicon.ico'));
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

mongoClient.connect(config.mongoDbUrl, function (err, db) {
    if(err){
        console.error('Please check if mongod is running! \n\n now closing ...');
        process.exit(0);
    }
    
    console.log('connected to mongodb');
    // Add Mongo db handler to the getMovies function
    var exposeDb = function(req, res, next){
        req.mongodb = db;
        next();
    };
    // Define Routes here
    app.get('/getMovies',exposeDb,moviesDbAdapter.getMovies);
    app.get('/markAsSeen', exposeDb, moviesDbAdapter.markAsSeen);
    app.get('/removeFromWatchedList', exposeDb, moviesDbAdapter.removeFromWatchedList);
    app.get('/watchedMovies', exposeDb, moviesDbAdapter.watchedMovies);
    app.get('/searchMovies', exposeDb, moviesDbAdapter.searchMovies);
    app.get('/movie', exposeDb, moviesDbAdapter.getMovie);
    app.get('/*',function (req, res) {
        // Server index page
        res.sendFile(__dirname+'/public/index.html');
    });
    app.listen(config.port, function () {
        console.log('Listening to port '+config.port);
		open('http://localhost:3000',{app:'chrome'});
    });
});


