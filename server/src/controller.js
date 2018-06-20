const searchMovieAPI = require('./movieApi');
const { saveSearch, getSearches } = require('./model');
const Movie = require('./movieClass');

module.exports.searchForMovie = (req, res) => {
  const { searchTerm } = req.body;
  searchMovieAPI(searchTerm, (movieObjs) => {
    // turning the api results into Movie instances
    let movies;
    if (movieObjs) {
      movies = movieObjs.map((obj) => {
        const {
          title, release_date, vote_average, overview, poster_path,
        } = obj;
        return new Movie(title, release_date.slice(0, 4), vote_average, overview, poster_path);
      });
    }
    // save search to db
    saveSearch(searchTerm, (err, savedSearch) => {
      // send the results to client
      // ignore if the error is about duplicates
      if (err && err.code !== 11000) {
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
