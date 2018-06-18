import { Movie } from './movie';

const posterBaseURL = 'http://image.tmdb.org/t/p/w185';
const mapObjectsToMovies = function(objs): Movie[] {
  let results: Movie[] = [];

  return results = objs.map((obj) => {
    const { id, title, poster_path, vote_average, overview, release_date } = obj;
    return new Movie(id, title, posterBaseURL + poster_path,
       vote_average, overview, new Date(release_date));
  });
};

const mapObjectsToTermStrings = function(objs): string[] {
  return objs.map((obj) => {
    return obj.term;
  });
};
