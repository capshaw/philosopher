const config = require('../config');
const os = require('os');

module.exports = (app, now) => {
  app.get('/', (req, res) => {
    res.send({
      name: 'philosopher',
      purpose: 'A service for @acapshaw to learn node',
      documentation: 'https://github.com/capshaw/philosopher',
      startup: now,
      host: os.hostname(),
      properties: {
        port: config.port,
        environment: config.environment,
      },
    });
  });
};
