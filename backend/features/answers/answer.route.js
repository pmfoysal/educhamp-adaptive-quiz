const api = require('express').Router();
const controllers = require('./answer.controller');

api.route('/answer').post(controllers.addOne);
api.get('/answer/user/:id', controllers.getOneByUser);
api.get('/answer/reports/:id', controllers.getReports);
api.route('/answer/:id').get(controllers.getOne).patch(controllers.editOne).delete(controllers.deleteOne);

module.exports = api;
