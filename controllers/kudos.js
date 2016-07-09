var cradle = require('cradle');

module.exports = function(app, app_properties) {
  app.get('/kudos/:kudos_id', function (req, res) {
    res.send('Hello World!');
  });

  app.post('/kudos', function (req, res) {
    res.send('Hello World!');
  });

  app.get('/feed', function (req, res) {
    res.send([]);
  });
}
