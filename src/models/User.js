const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	password: String,
	email: String
})

module.export = mongoose.model('User', UserSchema);