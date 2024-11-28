const api = require('express').Router();
const controllers = require('./answer.controller');
const middlewares = require('../auth/auth.middleware');

api.route('/answer').post(middlewares.authChecker, controllers.addOne);
api.get('/answer/user', middlewares.authChecker, controllers.getOneByUser);
api.get('/answer/reports', middlewares.authChecker, controllers.getReports);
api.route('/answer/:id')
	.get(middlewares.authChecker, controllers.getOne)
	.patch(middlewares.authChecker, controllers.editOne)
	.delete(middlewares.authChecker, controllers.deleteOne);

module.exports = api;
