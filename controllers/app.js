const config = require('../config');

module.exports = (app, now) => {
  app.get('/', (req, res) => {
    res.send({
      name: 'philosopher',
      purpose: 'tbd',
      startup: now,
      properties: {
        port: config.port,
        environment: config.environment,
      },
    });
  });
};
