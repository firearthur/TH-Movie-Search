export class Movie {
  id: string;
  title: string;
  posterURL: string;
  voteAverage: number;
  overview: string;
  releaseDate: Date;

  constructor(id, title, posterURL, voteAverage, overview, releaseDate){
    this.id = id;
    this.title = title;
    this.posterURL = posterURL;
    this.voteAverage = voteAverage;
    this.overview = overview;
    this.releaseDate = releaseDate;
  }
}
