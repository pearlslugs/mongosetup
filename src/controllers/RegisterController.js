const User = require('../models/User.js');

module.exports = {
	async store(req, res){
		try {
			console.log(req.body)
			const {firstName, lastName, password, email} = req.body;
			console.log(firstName, "first name", req.body);
		} catch (error) {
			console.log("you fucked up")
		}
	}
}