const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('should return CI/CD Pipeline Working!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('CI/CD Pipeline Working!');
  });
});