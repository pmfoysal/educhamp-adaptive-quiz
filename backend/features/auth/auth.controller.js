const jwt = require('jsonwebtoken');
const authServices = require('../auth/auth.service');
const userServices = require('../users/user.service');

module.exports.signin = async (req, res) => {
	try {
		const user = await userServices.getOne({ email: req.body.email });
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
		const user = await userServices.addOne(req.body);
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });
		delete user.password;
		res.status(200).send({ ...user, token });
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports.getInfo = async (req, res) => {
	try {
		const user = await authServices.getInfo(req._id);
		res.status(200).send(user);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports.googleCallback = async (req, res) => {
	try {
		const user = req.user._doc;
		const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });
		delete user.password;
		res.status(200).send({ ...user, token });
	} catch (error) {
		res.status(400).send(error.message);
	}
};
