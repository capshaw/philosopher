module.exports = function (app, app_properties) {
  app.get('/', function (req, res) {
    res.send({
      'name': 'philosopher',
      'purpose': 'To store and enable querying of kudos.',
      'properties': app_properties
    });
  });
}
