const Answer = require('./answer.model');

module.exports.addOne = async data => {
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
	const answer = await Answer.findOne({ userId }).populate('results.questionId').exec();
	const groups = answer.results.reduce((topics, item) => {
		if (topics[item.topic]) topics[item.topic].push(item);
		else topics[item.topic] = [item];
		return topics;
	}, {});

	return Object.keys(groups).map(topic => {
		const suggestions = '';
		const questions = groups[topic];
		const totalScore = questions.filter(item => item.correctOption === item.selectedOption).length;

		const percent = (totalScore / questions.length) * 100;
		const general = `Your performace in ${topic} is ${Math.round(percent)}%.`;

		if (percent >= 85)
			suggestions = `Continue consistent review, dive deeper into complex topics to further solidify your expertise, and consider teaching others to reinforce your knowledge and ensure long-term retention.`;
		else if (percent >= 65)
			suggestions = `Challenge yourself with more advanced material, practice under exam conditions, and review mistakes carefully. By refining your understanding and identifying areas for improvement, you’ll continue to enhance your skills.`;
		else if (percent > 50)
			suggestions = `Strengthen weak areas by revisiting difficult topics, apply concepts in practical scenarios, and work on time management. This will help solidify your learning, boost your accuracy, and improve your performance.`;
		else
			suggestions = `Focus on reviewing foundational concepts, reinforcing basic principles, and building a solid understanding. Practice consistently, seek additional resources, and revisit weak areas to enhance your comprehension.`;

		return {
			topic,
			questions,
			totalScore,
			totalQuestion: questions.length,
			suggestions: `${general} ${suggestions}`,
			totalAnswered: questions.filter(item => item.selectedOption !== null).length,
		};
	});
};
