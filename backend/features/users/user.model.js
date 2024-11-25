const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	gId: { type: String, default: '' },
	name: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('User', schema);
