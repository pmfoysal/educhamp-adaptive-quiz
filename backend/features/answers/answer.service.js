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
