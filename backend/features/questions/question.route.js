const route = require('express').Router();
const controllers = require('./question.controller');

route.route('/question').post(controllers.addOne);
route.route('/questions').post(controllers.addMany).get(controllers.getMany).delete(controllers.deleteMany);
route.route('/question/:id').get(controllers.getOne).patch(controllers.editOne).delete(controllers.deleteOne);

module.exports = route;
