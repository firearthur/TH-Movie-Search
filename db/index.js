const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI || process.env.DB_LINK);

const db = mongoose.connection;

// DANGER! in case you want to drop the DB
// db.dropDatabase((err) => {
//   if (err) {
//     console.log('errrrrr', err);
//   } else {
//     console.log('collection dropped');
//   }
// });

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('we\'re connected! to mongo db');
});
module.exports = mongoose;
