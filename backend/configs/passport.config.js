const passport = require('passport');
const User = require('features/users/user.model');
const services = require('../features/auth/auth.service');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: '/api/auth/google/callback',
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				const user = await services.addGoogle(profile);
				done(null, user);
			} catch (err) {
				done(err, null);
			}
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await User.findById(id);
		done(null, user);
	} catch (err) {
		done(err, null);
	}
});

module.exports = passport;
