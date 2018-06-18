const router = require('express').Router();
const { searchForMovie, getSearchHistory } = require('./controller');

router.get('/', (req, res) => {
  res.send('hello there');
});

router.post('/search', searchForMovie);
router.get('/searchHistory', getSearchHistory);

module.exports.router = router;

