const searchMovieAPI = require('./movieApi');
const { saveSearch, getSearches } = require('./model');

module.exports.searchForMovie = (req, res) => {
  const { searchTerm } = req.body;
  searchMovieAPI(searchTerm, (movies) => {
    // save search to db
    saveSearch(searchTerm, (err, savedSearch) => {
      console.log('here is the saved search ===>', savedSearch);
      // send the results to client
      console.log(err);
      if (err) {
        res.send(err);
      } else {
        res.send(movies);
      }
    });
  });
};

module.exports.getSearchHistory = (req, res) => {
  getSearches((err, searches) => {
    if (err) {
      res.send(err);
    } else {
      res.send(searches);
    }
  });
};
