const services = require('./answer.service');

module.exports.addOne = async (req, res) => {
	try {
		const result = await services.addOne(req.body);
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports.getOne = async (req, res) => {
	try {
		const result = await services.getOne(req.params.id);
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports.getReports = async (req, res) => {
	try {
		const result = await services.getReports(req._id);
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports.getOneByUser = async (req, res) => {
	try {
		const result = await services.getOneByUser(req._id);
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports.editOne = async (req, res) => {
	try {
		const result = await services.editOne({ id: req.params.id, data: req.body });
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports.deleteOne = async (req, res) => {
	try {
		const result = await services.deleteOne(req.params.id);
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};
