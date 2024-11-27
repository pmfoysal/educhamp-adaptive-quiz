const services = require('./question.service');

module.exports.addOne = async (req, res) => {
	try {
		const result = await services.addOne(req.body);
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports.addMany = async (req, res) => {
	try {
		const result = await services.addMany(req.body);
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

module.exports.getMany = async (req, res) => {
	try {
		const result = await services.getMany();
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports.getNextOne = async (req, res) => {
	try {
		const result = await services.getNextOne(req.body);
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports.getTotal = async (req, res) => {
	try {
		const result = await services.getTotal();
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports.editOne = async (req, res) => {
	try {
		const result = await services.editOne({ _id: req.params.id, data: req.body });
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

module.exports.deleteMany = async (req, res) => {
	try {
		const result = await services.deleteMany(req.body);
		res.status(200).send(result);
	} catch (error) {
		res.status(400).send(error.message);
	}
};
