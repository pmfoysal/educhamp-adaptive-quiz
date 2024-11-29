// require('dotenv').config();
// const request = require('supertest');

// const server = process.env.BACKEND_URL;

// describe('Authentication Tests:', () => {
// 	describe('Using Email and Password', () => {
// 		const id = 'test' + Date.now().toString(16);
// 		const user = { name: 'Test User', email: id + '@gmail.com', password: '123456' };

// 		it('Should signup successfully with valid data.', async () => {
// 			const res = await request(server).post('/api/auth/signup').send(user);
// 			expect(res.status).toBe(200);
// 			expect(res.body).toHaveProperty('token');
// 		});

// 		it('Should signup failed with invalid data.', async () => {
// 			const res = await request(server).post('/api/auth/signup').send({});
// 			expect(res.status).toBe(400);
// 		});

// 		it('Should signin successfully with valid data.', async () => {
// 			const res = await request(server).post('/api/auth/signin').send(user);
// 			expect(res.status).toBe(200);
// 			expect(res.body).toHaveProperty('token');
// 		});

// 		it('Should signin failed with invalid data.', async () => {
// 			const res = await request(server).post('/api/auth/signin').send({});
// 			expect(res.status).toBe(400);
// 		});
// 	});

// 	describe('Using Google oAuth20', () => {
// 		it('Should redirect user to the google page', async () => {
// 			const res = await request(server).get('/api/auth/google');
// 			expect(res.status).toBe(302);
// 			expect(res.header.location).toContain('https://accounts.google.com/o/oauth2/v2/auth');
// 		});
// 	});
// });
