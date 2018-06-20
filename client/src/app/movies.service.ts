import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const REST_SERVER_URL = 'http://localhost:3300/api/';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  getMovies (searchTerm): Observable<Object[]> {
    return this.http.post<Object[]>(REST_SERVER_URL + 'search', { searchTerm } );
  }
}
