var express =require('express');
var app = express();
var passport = require('./passport/passport');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL);

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static('public'));
app.use(require('express-session')({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (request, response) {
	response.sendFile(__dirname + '/views/index.html');
});

app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', 
	passport.authenticate('twitter'),
	function(req, res) {
		res.redirect('/');
	});
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', 
	passport.authenticate('github'),
	function(req, res) {
		res.redirect('/');
	});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
	console.log('Your app is listening on port ' + listener.address().port);
});
