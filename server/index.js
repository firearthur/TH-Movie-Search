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

// app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/app', router);


app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
