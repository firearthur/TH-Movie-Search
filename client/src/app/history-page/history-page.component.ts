import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  searchHistory = ['300', 'LOTR', 'Hobbit'];
  constructor() { }

  ngOnInit() {
  }

}

// TODO: load the History from an http and use subscribe

