const jwt = require('jsonwebtoken');

module.exports.authChecker = (req, res, nex) => {
	const token = req.headers.authorization?.split(' ')?.[1];

	if (!token) return res.status(401).send('Access denied! No token provided');

	try {
		const { _id } = jwt.verify(token, process.env.JWT_SECRET);
		req._id = _id;
		nex();
	} catch (error) {
		res.status(401).send(error.message);
	}
};
