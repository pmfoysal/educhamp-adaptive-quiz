const Answer = require('./answer.model');
const { ObjectId } = require('mongoose').Types;

module.exports.addOne = async data => {
	await Answer.deleteOne({ userId: new ObjectId(data.userId) });
	const answer = await Answer.create(data);
	return answer.save();
};

module.exports.getOne = async _id => {
	return await Answer.findById(_id);
};

module.exports.getOneByUser = async userId => {
	return await Answer.findOne({ userId });
};

module.exports.editOne = async ({ _id, data }) => {
	return await Answer.updateOne({ _id }, data);
};

module.exports.deleteOne = async _id => {
	return await Answer.deleteOne({ _id });
};

module.exports.getReports = async userId => {
	const answers = await Answer.aggregate([
		{
			$match: { userId: new ObjectId(userId) },
		},
		{
			$unwind: '$results',
		},
		{
			$lookup: {
				from: 'questions',
				localField: 'results.questionId',
				foreignField: '_id',
				as: 'question',
			},
		},
		{
			$unwind: '$question',
		},
		{
			$addFields: {
				questionId: '$question._id',
				title: '$question.title',
				topic: '$question.topic',
				options: '$question.options',
				difficulty: '$question.difficulty',
				correctOption: '$question.correctOption',
				__v: '$question.__v',
				createdAt: '$question.createdAt',
				updatedAt: '$question.updatedAt',
				selectedOption: '$results.selectedOption',
				answerId: '$results._id',
			},
		},
		{
			$project: {
				question: 0,
				results: 0,
			},
		},
	]);

	const topics = answers.reduce((topics, item) => {
		if (topics[item.topic]) topics[item.topic].push(item);
		else topics[item.topic] = [item];
		return topics;
	}, {});

	return Object.keys(topics).map(key => {
		let suggestions = '';
		const questions = topics[key];
		const totalScore = questions.filter(item => item.correctOption === item.selectedOption).length;

		const percent = (totalScore / questions.length) * 100;
		const general = `Your performace in ${key} is ${Math.round(percent)}%.`;

		if (percent > 75)
			suggestions = `Continue consistent review, dive deeper into complex topics to further solidify your expertise, and consider teaching others to reinforce your knowledge and ensure long-term retention.`;
		else if (percent > 50)
			suggestions = `Challenge yourself with more advanced material, practice under exam conditions, and review mistakes carefully. By refining your understanding and identifying areas for improvement, you’ll continue to enhance your skills.`;
		else if (percent > 25)
			suggestions = `Strengthen weak areas by revisiting difficult topics, apply concepts in practical scenarios, and work on time management. This will help solidify your learning, boost your accuracy, and improve your performance.`;
		else
			suggestions = `Focus on reviewing foundational concepts, reinforcing basic principles, and building a solid understanding. Practice consistently, seek additional resources, and revisit weak areas to enhance your comprehension.`;

		return {
			topic: key,
			questions,
			totalScore,
			totalQuestion: questions.length,
			suggestions: `${general} ${suggestions}`,
			totalAnswered: questions.filter(item => item.selectedOption !== null).length,
		};
	});
};
