const mongoose = require('./index');

// const SearchSchema = mongoose.Schema({

//   term: String,
// });


const SearchSchema = mongoose.Schema({

  term: { type: String, unique: true, dropDups: true },
});


const SearchModel = mongoose.model('SearchModel', SearchSchema);

module.exports = SearchModel;
