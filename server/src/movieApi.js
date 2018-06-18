const http = require('https');

const searchMovieAPI = (searchTerm, cb) => {
  const searchTermNoSpace = replaceSpaceWithUnicode(searchTerm);
  const options = {
    method: 'GET',
    hostname: 'api.themoviedb.org',
    port: null,
    path: `/3/search/movie?include_adult=false&page=1&query=${searchTermNoSpace}&language=en-US&api_key=${process.env.MOVIE_API_KEY}`,
    headers: {},
  };

  const req = http.request(options, (res) => {
    const chunks = [];

    res.on('data', (chunk) => {
      chunks.push(chunk);
    });

    res.on('end', () => {
      const body = Buffer.concat(chunks);
      // got the movie data in body
      cb(body);
    });
  });

  req.write('{}');
  req.end();
};

const replaceSpaceWithUnicode = (s) => {
  const string = s.trim();
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      newString += '%20';
    } else {
      newString += string[i];
    }
  }
  return newString.trim();
};

module.exports = searchMovieAPI;

