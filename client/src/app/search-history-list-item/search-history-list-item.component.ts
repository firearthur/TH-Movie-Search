import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-history-list-item',
  templateUrl: './search-history-list-item.component.html',
  styleUrls: ['./search-history-list-item.component.css']
})
export class SearchHistoryListItemComponent implements OnInit {
  @Input() term: string;
  constructor() { }

  ngOnInit() {
  }

}
