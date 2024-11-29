require('dotenv').config();
const request = require('supertest');

const server = process.env.BACKEND_URL;
const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ5OGI5YzE3NDhkNWQ5MjIzNjk2ODQiLCJpYXQiOjE3MzI4NzMxMTYsImV4cCI6MTczODA1NzExNn0.IHcif_0gMlCLYFogyMgOl09ork8KUlpQAf45YqJ9qKk';

describe('Quiz Answer Tests:', () => {
	it('Should have user answers', async () => {
		const res = await request(server).get('/api/quiz/answer/user').set('authorization', `Bearer ${token}`);
		expect(res.status).toBe(200);
		expect(res.body).toHaveProperty('results');
	});
	it('Should have user analytics', async () => {
		const res = await request(server).get('/api/quiz/answer/reports').set('authorization', `Bearer ${token}`);
		expect(res.status).toBe(200);
		expect(res.body[0]).toHaveProperty('totalQuestion');
		expect(res.body[0]).toHaveProperty('totalAnswered');
		expect(res.body[0]).toHaveProperty('totalScore');
	});
	it('Should have improvement suggestions', async () => {
		const res = await request(server).get('/api/quiz/answer/reports').set('authorization', `Bearer ${token}`);
		expect(res.status).toBe(200);
		expect(res.body[0]).toHaveProperty('suggestions');
	});
});
