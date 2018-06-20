import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../classes/movie';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  @Input() searched: boolean;
  @Input() movies: Movie[];
  constructor() { }

  ngOnInit() {
  }

}
