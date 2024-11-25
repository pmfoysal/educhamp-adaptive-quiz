const User = require('./user.model');

module.exports.addOne = async data => {
	const prev = await User.findOne({ email: data.email });
	if (prev) throw new Error('User already exists');
	const user = await User.create(data);
	return user.save();
};

module.exports.getOne = async data => {
	return await User.findOne(data);
};
