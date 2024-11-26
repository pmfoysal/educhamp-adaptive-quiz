const answer = require('express').Router();
const controllers = require('./answer.controller');

answer.route('/answer').post(controllers.addOne);
answer.route('/answer/user/:id').get(controllers.getOneByUser);
answer.route('/answer/:id').get(controllers.getOne).patch(controllers.editOne).delete(controllers.deleteOne);

module.exports = answer;
