const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moviesDB');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('we\'re connected! to mongo db');
});
module.exports = mongoose;
