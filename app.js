const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const config = require('./config');

const now = new Date();
const app = express();
app.use(bodyParser.json());
app.use(expressValidator());

require('./controllers/app')(app, now);
require('./controllers/kudos')(app);
require('./controllers/errors')(app);

app.listen(config.port, () => {
  console.log(`Philosopher app listening on port ${config.port}!`);
});

module.exports = app;
