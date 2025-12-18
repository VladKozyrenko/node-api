const request = require('supertest');
const app = require('../app');

describe('Tasks API', () => {
    it('GET /tasks should return 200', async () => {
        const res = await request(app).get('/tasks');
        expect(res.statusCode).toBe(200);
    });

    it('POST /tasks should create task', async () => {
        const res = await request(app)
            .post('/tasks')
            .send({ title: 'Lab 1' });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.title).toBe('Lab 1');
    });
});
