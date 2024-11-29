require('dotenv').config();
const request = require('supertest');

const server = process.env.BACKEND_URL;

describe('Quiz Question Tests:', () => {
	describe('Quiz adaptation based on user responses', () => {
		it('Should increase difficulty level while correct', async () => {
			const res = await request(server)
				.post('/api/quiz/questions/next')
				.send({
					currId: '6745a45a0aae3e619e79ca63',
					currOption: 3,
					answeredIds: ['6745a45a0aae3e619e79ca5b', '6745a45a0aae3e619e79ca63'],
				});
			expect(res.status).toBe(200);
			expect(res.body).toHaveProperty('difficulty', 'hard');
		});
		it('Should decrease difficulty level while incorrect', async () => {
			const res = await request(server)
				.post('/api/quiz/questions/next')
				.send({
					currId: '6745a45a0aae3e619e79ca67',
					currOption: 3,
					answeredIds: ['6745a45a0aae3e619e79ca5b', '6745a45a0aae3e619e79ca63', '6745a45a0aae3e619e79ca67'],
				});
			expect(res.status).toBe(200);
			expect(res.body).toHaveProperty('difficulty', 'medium');
		});
	});
});
