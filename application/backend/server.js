const awsServerlessExpress = require('aws-serverless-express');
const { app, sequelize } = require('./src/app');

// Ensure DB is connected before handling requests
sequelize.authenticate()
  .then(() => {
    console.log('Database connected.');
  })
  .catch(err => {
    console.error('DB connection failed:', err);
  });

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) =>
  awsServerlessExpress.proxy(server, event, context);