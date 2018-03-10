var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var UserSchema = mongoose.Schema({
	username: {
		type: String
	}
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', UserSchema);