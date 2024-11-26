const Question = require('./question.model');

module.exports.addOne = async data => {
	const question = await Question.create(data);
	return await question.save();
};

module.exports.addMany = async data => {
	return await Question.insertMany(data);
};

module.exports.getOne = async _id => {
	return await Question.findById(_id).select('-correctOption');
};

module.exports.getMany = async () => {
	return await Question.aggregate([
		{
			$addFields: {
				level: {
					$switch: {
						branches: [
							{ case: { $eq: ['$difficulty', 'easy'] }, then: 1 },
							{ case: { $eq: ['$difficulty', 'medium'] }, then: 2 },
							{ case: { $eq: ['$difficulty', 'hard'] }, then: 3 },
						],
						default: 4,
					},
				},
			},
		},
		{ $sort: { level: 1 } },
		{ $project: { correctOption: 0, level: 0 } },
	]);
};

module.exports.editOne = async ({ _id, data }) => {
	return await Question.updateOne({ _id }, data);
};

module.exports.deleteOne = async _id => {
	return await Question.deleteOne({ _id });
};

module.exports.deleteMany = async ids => {
	return await Question.deleteMany({ _id: { $in: ids } });
};
