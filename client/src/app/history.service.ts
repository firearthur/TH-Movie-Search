import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// dev
// const REST_SERVER_URL = 'http://localhost:3300/api/';

// production
const REST_SERVER_URL = 'https://th-movie-search.herokuapp.com/api/';




@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }
  getHistory (): Observable<Object[]> {
    return this.http.get<Object[]>(REST_SERVER_URL + 'searchHistory');
  }
}
