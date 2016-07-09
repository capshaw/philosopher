var express = require('express');
var config = require('./config');

var app = express();
require('./controllers/app')(app);
require('./controllers/kudos')(app);

app.listen(config.port, function () {
  console.log('Philosopher app listening on port ' + config.port + '!');
});
