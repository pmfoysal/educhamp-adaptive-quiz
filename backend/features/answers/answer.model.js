const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
		results: [
			{
				questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
				selectedOption: { type: Number, default: null },
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Answer', schema);
