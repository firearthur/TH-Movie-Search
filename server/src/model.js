const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/moviesDB');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('we\'re connected! to mongo db');
});

const SearchSchema = mongoose.Schema({
  
  term: String,
});

const SearchModel = mongoose.model('SearchModel', SearchSchema);

const saveSearch = (searchTerm, cb) => {
  new SearchModel({ term: searchTerm }).save((err, data) => {
    if (err) {
      console.log('Error while saving a search term', err);
    }
    cb(err, data);
  });
};

// const saveSearch = (searchTerm, cb) => {
//   SearchModel.insertMany({ term: searchTerm }, (err, data) => {
//     if (err) {
//       cb(err, null);
//     }
//     cb(null, data);
//   });
// };


SearchModel.remove({}, (err, success) => { // dropping the database
  if (err) {
    console.log(err);
  } else {
    console.log('Database dropped');
  }
});

const getSearches = (cb) => {
  SearchModel.find({}, (err, searches) => {
    if (err) {
      cb(err, null);
    }
    cb(null, searches);
  });
};

module.exports.getSearches = getSearches;
module.exports.saveSearch = saveSearch;
