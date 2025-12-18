const request = require('supertest');
const app = require('../app');

describe('Users API', () => {
    it('GET /users should return 200', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toBe(200);
    });

    it('POST /users should create user', async () => {
        const res = await request(app)
            .post('/users')
            .send({ name: 'Ivan' });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toBe('Ivan');
    });
});
