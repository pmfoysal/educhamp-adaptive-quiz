const jwt = require('jsonwebtoken');
const services = require('../users/user.service');

module.exports.signin = async (req, res) => {
	try {
		const user = await services.getOne({ email: req.body.email });
		if (!user) throw new Error('No user found');
		const isValid = user.isValidPass(req.body.password);
		if (!isValid) throw new Error("Opps! Password didn't matched");
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });
		delete user.password;
		res.status(200).send({ ...user, token });
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports.signup = async (req, res) => {
	try {
		const user = await services.addOne(req.body);
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });
		delete user.password;
		res.status(200).send({ ...user, token });
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports.googleCallback = async (req, res) => {
	try {
		const user = req.user;
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });
		delete user.password;
		res.status(200).send({ ...user, token });
	} catch (error) {
		res.status(400).send(error.message);
	}
};
