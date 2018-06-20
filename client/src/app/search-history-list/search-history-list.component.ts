import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-history-list',
  templateUrl: './search-history-list.component.html',
  styleUrls: ['./search-history-list.component.css']
})
export class SearchHistoryListComponent implements OnInit {
  @Input() history: string[];
  constructor() { }

  ngOnInit() {
  }

}
