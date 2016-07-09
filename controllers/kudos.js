var cradle = require('cradle');
var validation = require('../utility/validation');

module.exports = function (app) {

  var kudosRequiredFields = [
    'message',
    'creator',
    'recepients'
  ];

  app.get('/kudos/:kudos_id', function (req, res) {
    res.send('Hello World!');
  });

  app.post('/kudos', function (req, res) {
    if (validation.requireBodyParameters(kudosRequiredFields, req, res)) {
      return;
    }

    res.send('Hello world!');
  });

  app.get('/feed', function (req, res) {
    res.send([]);
  });
}
