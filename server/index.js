const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const httpsRedirect = require('express-https-redirect');
const logger = require('morgan');
// const favicon = require('serve-favicon');
const { router } = require('./src/router');

const port = process.env.PORT || 3300;
const app = express();

app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/', httpsRedirect());
// TODO: look into cors and duplicates in db
// TODO: sockets
// TODO: wildcard
// TODO: put schema in its own file
app.use(express.static(path.join(__dirname, '/../public/')));

app.use('/api', router);


app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
