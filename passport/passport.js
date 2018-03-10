var passport = require('passport');
var configAuth = require('./auth');
var User = require('../models/user');
var GitHubStrategy = require('passport-github').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new GitHubStrategy({
	clientID: configAuth.githubAuth.clientID,
	clientSecret: configAuth.githubAuth.clientSecret,
	callbackURL: configAuth.githubAuth.callbackURL
},
function(accessToken, refreshToken, profile, cb) {
	User.findOrCreate({ username: profile.username }, function (err, user) {
		return cb(err, user);
	});
}
));

passport.use(new TwitterStrategy({
	consumerKey: configAuth.twitterAuth.consumerKey,
	consumerSecret: configAuth.twitterAuth.consumerSecret,
	callbackURL: configAuth.twitterAuth.callbackURL
},
function(accessToken, refreshToken, profile, cb) {
	User.findOrCreate({ username: profile.username }, function (err, user) {
		return cb(null, user);
	});
}
));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

module.exports = passport;