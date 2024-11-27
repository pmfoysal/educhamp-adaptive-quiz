const passport = require('passport');
const api = require('express').Router();
const controllers = require('./auth.controller');

api.get('/info', controllers.getInfo);
api.post('/signin', controllers.signin);
api.post('/signup', controllers.signup);

api.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
api.get('/google/callback', passport.authenticate('google', { session: false }), controllers.googleCallback);

module.exports = api;
