const User = require('../users/user.model');

module.exports.addGoogle = async data => {
	const { id, displayName, emails } = data;
	let user = await User.findOne({ googleId: id });
	if (user) return user;

	const email = emails[0].value;
	user = await User.findOne({ email });

	if (user) {
		user.googleId = id;
		await user.save();
	} else {
		const temp = await User.create({ email, googleId: id, name: displayName });
		user = await temp.save();
	}

	return user;
};
