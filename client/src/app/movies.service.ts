import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './classes/movie';

// const REST_SERVER_URL = 'http://localhost:3300/api/';
const REST_SERVER_URL = 'https://th-movie-search.herokuapp.com/api';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  getMovies (searchTerm): Observable<Movie[]> {
    return this.http.post<Movie[]>(REST_SERVER_URL + 'search', { searchTerm } );
  }
}
