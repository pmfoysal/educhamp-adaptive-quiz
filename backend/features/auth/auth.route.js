const passport = require('passport');
const api = require('express').Router();
const controllers = require('./auth.controller');
const middlewares = require('./auth.middleware');

api.post('/signin', controllers.signin);
api.post('/signup', controllers.signup);
api.get('/info', middlewares.authChecker, controllers.getInfo);

api.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
api.get('/google/callback', passport.authenticate('google', { session: false }), controllers.googleCallback);

module.exports = api;
