var config = require('../config');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.send({
      'name': 'philosopher',
      'purpose': 'To store and enable querying of kudos.',
      'properties': {
        'port': config.port
      }
    });
  });
}
