const api = require('express').Router();
const controllers = require('./question.controller');

api.route('/question').post(controllers.addOne);
api.route('/questions').post(controllers.addMany).get(controllers.getMany).delete(controllers.deleteMany);
api.route('/question/:id').get(controllers.getOne).patch(controllers.editOne).delete(controllers.deleteOne);

module.exports = api;
