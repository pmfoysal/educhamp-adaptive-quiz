const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		topic: { type: String, required: true },
		options: [{ type: String, required: true }],
		difficulty: { type: String, required: true },
		correctOption: { type: Number, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Question', schema);
