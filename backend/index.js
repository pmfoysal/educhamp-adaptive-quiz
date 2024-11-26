require('colors');
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('./configs/passport.config');
const authRoutes = require('./features/auth/auth.route');
const answerRoutes = require('./features/answers/answer.route');
const questionRoutes = require('./features/questions/question.route');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/api/auth', authRoutes);
app.use('/api/quiz', answerRoutes);
app.use('/api/quiz', questionRoutes);

mongoose
	.connect(process.env.MONGODB_URL, { serverApi: { version: '1', strict: true, deprecationErrors: true } })
	.then(() => console.log('MongoDB Connected!'.green))
	.catch(err => console.error('MongoDB Connection Failed!'.red, err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`.blue));
