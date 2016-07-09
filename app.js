var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator')
var config = require('./config');

var app = express();
app.use(bodyParser.json());
app.use(expressValidator());

require('./controllers/app')(app);
require('./controllers/kudos')(app);

app.listen(config.port, function () {
  console.log('Philosopher app listening on port ' + config.port + '!');
});
