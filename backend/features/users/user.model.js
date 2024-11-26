const crypto = require('crypto');
const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		googleId: { type: String, default: '' },
		password: { type: String, required: true },
		email: { type: String, required: true, unique: true },
	},
	{ timestamps: true }
);

schema.pre('save', async function (next) {
	if (this.isModified('password')) {
		try {
			this.password = crypto.pbkdf2Sync(this.password, process.env.CRYPTO_SALT, 1000, 64, 'sha512').toString('hex');
			next();
		} catch (err) {
			next(err);
		}
	} else next();
});

schema.methods.isValidPass = function (password) {
	try {
		return this.password === crypto.pbkdf2Sync(password, process.env.CRYPTO_SALT, 1000, 64, 'sha512').toString('hex');
	} catch (err) {
		throw new Error(err.message);
	}
};

module.exports = mongoose.model('User', schema);
