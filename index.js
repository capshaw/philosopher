var express = require('express');
var properties = require('./utility/properties')();

properties.load_properties(function (app_properties) {
  var app = express();
  require('./controllers/app')(app, app_properties);
  require('./controllers/kudos')(app, app_properties);

  app.listen(app_properties.port, function () {
    console.log('Philosopher app listening on port ' + app_properties.port + '!');
  });
});
