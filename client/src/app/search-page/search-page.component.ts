import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../classes/movie';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searched = false;
  movies: Movie[];
  spinning = false;
  constructor(private moviesService: MoviesService) { }

  getMovies(searchTerm): void {
    this.moviesService.getMovies(searchTerm)
      .subscribe(movies => {
        this.searched = true;
        this.spinning = false;
        this.movies = movies;
      });
  }

  showSpinner() {
    this.spinning = true;
  }

  ngOnInit() {
  }

}
