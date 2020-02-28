const db = require('../database/dbConfig');
const request = require('supertest');
const server = require('../api/server');

// Joke tests...

describe('Jokes', () => {
    it('Should fail with status 401 due to not being logged in', async() => {
        const response = await request(server)
        .post('/api/jokes')
        expect(response.status).toBe(401)
    })
    it('Should return a specific error message in JSON format', async() => {
        const response = await request(server)
        .post('/api/jokes')
        expect(response.body).toEqual({ "Message": "Unauthorized!" })
    })
});