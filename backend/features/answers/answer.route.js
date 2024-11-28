const api = require('express').Router();
const controllers = require('./answer.controller');

api.route('/answer').post(controllers.addOne);
api.get('/answer/user', controllers.getOneByUser);
api.get('/answer/reports', controllers.getReports);
api.route('/answer/:id').get(controllers.getOne).patch(controllers.editOne).delete(controllers.deleteOne);

module.exports = api;
