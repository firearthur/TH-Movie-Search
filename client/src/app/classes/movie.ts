export class Movie {
  id: string;
  title: string;
  posterPath: string;
  voteAverage: number;
  overview: string;
  releaseYear: string;

  constructor(id, title, posterPath, voteAverage, overview, releaseYear) {
    this.id = id;
    this.title = title;
    this.posterPath = posterPath;
    this.voteAverage = voteAverage;
    this.overview = overview;
    this.releaseYear = releaseYear;
  }
}
