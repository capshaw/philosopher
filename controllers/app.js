var cradle = require('cradle');
var config = require('../config');

module.exports = function (app, now) {

  app.get('/', function (req, res) {

    // Intentionally only add certain properties to the greeting.
    res.send({
      'name': 'philosopher',
      'purpose': 'To store and enable querying of kudos.',
      'startup': now,
      'properties': {
        'port': config.port,
        'environment': config.environment
      }
    });
  });

  app.get('/initialize', function (req, res) {

    // If the environment is not a developer environment, let's pretend this
    // route does not exist.
    if (config.environment !== 'dev') {
      console.error('Cannot /initialize in a non-dev environment.');
      res.status(404);
      return;
    }

    // Create the kudos database if it does not already exist.
    var db = new(cradle.Connection)().database('kudos');
    db.exists(function (err, exists) {
      if (err) {
        console.error('There was an error checking for existance of the db', err);
      } else if (exists) {
        console.log('The database exists already, not creating it.');
      } else {
        console.log('The database does not exist yet, creating it.');
        db.create();
      }
    });

    // Create various views if they do not exist already.
    console.log('Creating/updating views!');
    db.save('_design/kudos', {
      all: {
        map: function (doc) {
          if (doc._id) {
            emit(doc._id, doc);
          }
        }
      }
    });

    res.send('Done!')
  });
}
