import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-list-item',
  templateUrl: './search-list-item.component.html',
  styleUrls: ['./search-list-item.component.css']
})
export class SearchListItemComponent implements OnInit {
  @Input() movie: Object;
  constructor() { }

  ngOnInit() {
  }

}
