require('colors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

mongoose
	.connect(process.env.MONGODB_URL, { serverApi: { version: '1', strict: true, deprecationErrors: true } })
	.then(() => console.log('MongoDB Connected!'.green))
	.catch(err => console.error('MongoDB Connection Failed!'.red, err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`.blue));
