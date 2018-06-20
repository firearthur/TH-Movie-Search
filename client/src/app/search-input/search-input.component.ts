import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  searchTerm: string;
  @Input() getMovies: any;
  constructor() { }
  onEnter(event): void {
    if (event.key === 'Enter') {
      this.getMovies(this.searchTerm.trim());
    }
  }
  ngOnInit() {
  }

}
