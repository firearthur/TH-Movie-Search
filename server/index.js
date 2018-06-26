const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const httpsRedirect = require('express-https-redirect');
const logger = require('morgan');
const favicon = require('serve-favicon');
const cors = require('cors');
const compression = require('compression');
const { router } = require('./src/router');

const port = process.env.PORT || 3300;

const app = express();
// compressing all responses
app.use(compression());

const corsOptions = {
  allowedHeaders: 'Content-Type,Authorization',
  methods: ['GET, POST, PUT, DELETE, OPTIONS'],
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// enable pre-flight across-the-board

app.options('*', cors());

app.use(cors(corsOptions));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', httpsRedirect());

app.use(express.static(path.join(__dirname, '../client/dist/client')));

app.use(favicon(path.join(__dirname, '../client/dist/client/favicon.ico')));

app.use('/api', router);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/client/index.html'));
});


app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
