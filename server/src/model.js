const SearchModel = require('./../../db/schema');

const saveSearch = (searchTerm, cb) => {
  new SearchModel({ term: searchTerm }).save((err, data) => {
    if (err) {
      console.log('Error while saving a search term', err);
    }
    cb(err, data);
  });
};

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

// in case of wanting to clear the db
// SearchModel.remove({}, (err, success) => { // dropping the database
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Database dropped');
//   }
// });
