var cradle = require('cradle');
var validation = require('../utility/validation');
var error = require('../utility/error');

module.exports = function (app) {

  var PAGE_SIZE = 10;

  var KUDOS_REQUIRED_FIELDS = [
    'message',
    'creator',
    'recepients'
  ];

  app.get('/kudos/:kudosId', function (req, res) {
    var db = new(cradle.Connection)().database('kudos');
    db.get(req.params.kudosId, function (err, doc) {
      if (err) {
        return error.serverError('There was a server error, please try again.', res);
      }

      res.status(200).send(doc);
    });
  });

  app.post('/kudos', function (req, res) {
    if (validation.requireBodyParameters(KUDOS_REQUIRED_FIELDS, req, res)) {
      return;
    }

    req.body.date_created = new Date();

    // TODO: more validation is required than just that, probably.

    var db = new(cradle.Connection)().database('kudos');
    db.save(req.body, function (err, result) {
      if (err) {
        return error.serverError('There was a server error, please try again.', res);
      }

      res.status(200).send({
        'message': 'Kudos save successfully!'
      });
    });
  });

  app.get('/feed/?:page?/?', function (req, res) {

    var page = req.params.page ? req.params.page : 0;
    var db = new(cradle.Connection)().database('kudos');
    var viewOptions = {
      limit: PAGE_SIZE,
      descending: true,
      skip: page * PAGE_SIZE
    };

    db.view('kudos/all', viewOptions, function (err, result) {
      if (err) {
        return error.serverError('There was a server error, please try again.', res);
      }

      res.status(200).send(result);
    });
  });
}
