const Question = require('./question.model');
const { ObjectId } = require('mongoose').Types;

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

module.exports.getNextOne = async data => {
	const { currId, currOption, answeredIds } = data;
	const currQuestion = await Question.findById(currId);

	const difficulties = ['easy', 'medium', 'hard'];

	let nextDifficulty = '';
	const maxLevel = difficulties.length - 1;
	const isCorrect = currQuestion.correctOption === currOption;
	const currLevel = difficulties.indexOf(currQuestion.difficulty);

	if (isCorrect) nextDifficulty = currLevel < maxLevel ? difficulties[currLevel + 1] : difficulties[currLevel];
	else nextDifficulty = currLevel > 0 ? difficulties[currLevel - 1] : difficulties[currLevel];

	const [questions] = await Question.aggregate([
		{
			$facet: {
				matchedQuestions: [
					{ $match: { _id: { $nin: answeredIds.map(id => new ObjectId(id)) }, difficulty: nextDifficulty } },
					{ $sample: { size: 1 } },
				],
				nextAvailables: [
					{ $match: { _id: { $nin: answeredIds.map(id => new ObjectId(id)) } } },
					{ $sample: { size: 1 } },
				],
			},
		},
		{
			$project: {
				nextOne: {
					$cond: {
						if: { $gt: [{ $size: '$matchedQuestions' }, 0] },
						then: { $arrayElemAt: ['$matchedQuestions', 0] },
						else: { $arrayElemAt: ['$nextAvailables', 0] },
					},
				},
			},
		},
	]);

	if (!questions || !questions.nextOne) throw new Error('No more questions available');

	return questions.nextOne;
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
