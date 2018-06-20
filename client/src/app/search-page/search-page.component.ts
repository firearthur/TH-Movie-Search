import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searched = false;
  movies: any[];
  constructor(private moviesService: MoviesService) { }

  getMovies(searchTerm): void {
    this.moviesService.getMovies(searchTerm)
      .subscribe(movies => {
        this.searched = true;
        this.movies = movies['results'];
      });
  }
  ngOnInit() {
  }

}
