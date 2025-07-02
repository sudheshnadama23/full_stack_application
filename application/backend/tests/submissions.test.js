require('dotenv').config({ path: '.env.test' });
const request = require('supertest');
const express = require('express');
const { sequelize, Submission } = require('../models');
const routes = require('../routes/submissions');

const app = express();
app.use(express.json());
app.use('/api/submissions', routes);

beforeAll(async () => {
  // Sync all models and ensure ENUM types are handled cleanly
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Submissions API', () => {
  let submissionId;

  test('POST /api/submissions - success', async () => {
    const res = await request(app).post('/api/submissions').send({
      full_name: 'John Doe',
      email: 'john@example.com',
      phone_number: '1234567890',
      age: 25,
      address: '123 Main St',
      preferred_contact: 'Email'
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    submissionId = res.body.id;
  });

  test('GET /api/submissions - list', async () => {
    const res = await request(app).get('/api/submissions');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /api/submissions/:id - fetch one', async () => {
    const res = await request(app).get(`/api/submissions/${submissionId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.full_name).toBe('John Doe');
  });

  test('PUT /api/submissions/:id - update', async () => {
    const res = await request(app).put(`/api/submissions/${submissionId}`).send({
      full_name: 'Jane Doe'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.full_name).toBe('Jane Doe');
  });

  test('DELETE /api/submissions/:id - delete', async () => {
    const res = await request(app).delete(`/api/submissions/${submissionId}`);
    expect(res.statusCode).toBe(204);
  });

  test('GET /api/submissions/:id - not found after delete', async () => {
    const res = await request(app).get(`/api/submissions/${submissionId}`);
    expect(res.statusCode).toBe(404);
  });
});