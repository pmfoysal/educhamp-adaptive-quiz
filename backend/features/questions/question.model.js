const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	text: { type: String, required: true },
	topic: { type: String, required: true },
	options: [{ type: String, required: true }],
	difficulty: { type: String, required: true },
	correctOption: { type: Number, required: true },
});

module.exports = mongoose.model('Question', schema);
