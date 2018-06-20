const searchMovieAPI = require('./movieApi');
const { saveSearch, getSearches } = require('./model');

module.exports.searchForMovie = (req, res) => {
  const { searchTerm } = req.body;
  searchMovieAPI(searchTerm, (movies) => {
    // save search to db
    saveSearch(searchTerm, (err, savedSearch) => {
      // send the results to client
      // ignore if the error is about duplicates
      if (err.code !== 11000) {
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
