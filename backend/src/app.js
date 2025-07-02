require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('../models'); // Sequelize initialized from models/index.js
const submissionRoutes = require('../routes/submissions');

const app = express();

// Middleware
app.use(cors({
  origin: '*', // Use specific origin in production
}));
app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => res.send('API is healthy'));

// Main routes
app.use('/api/submissions', submissionRoutes);

// Sync DB (creates table if not existing)
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database connected and synced.');
  })
  .catch(err => {
    console.error('Unable to connect to or sync the database:', err);
  });

module.exports = { app, sequelize };