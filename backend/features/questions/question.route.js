const api = require('express').Router();
const controllers = require('./question.controller');
const middlewares = require('../auth/auth.middleware');

api.route('/question').post(middlewares.authChecker, controllers.addOne);
api.get('/questions/total', middlewares.authChecker, controllers.getTotal);
api.post('/questions/next', controllers.getNextOne);
api.route('/questions')
	.post(middlewares.authChecker, controllers.addMany)
	.get(middlewares.authChecker, controllers.getMany)
	.delete(middlewares.authChecker, controllers.deleteMany);
api.route('/question/:id')
	.get(middlewares.authChecker, controllers.getOne)
	.patch(middlewares.authChecker, controllers.editOne)
	.delete(middlewares.authChecker, controllers.deleteOne);

module.exports = api;
