const passport = require('passport');
const auth = require('express').Router();
const controllers = require('./auth.controller');

auth.post('/signin', controllers.signin);
auth.post('/signup', controllers.signup);

auth.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
auth.get('/google/callback', passport.authenticate('google', { session: false }, controllers.googleCallback));
