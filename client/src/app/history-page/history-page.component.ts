import { Component, OnInit } from '@angular/core';
import { HistoryService } from './../history.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  searchHistory: string[];
  constructor(private historyService: HistoryService) { }
  getHistory(): void {
    this.historyService.getHistory()
      // .subscribe(
      //   searchHistory => {
      //     console.log('i got this from server', searchHistory);
      //   }
      // );
      .subscribe(
        searchHistory => this.searchHistory = searchHistory
          .map((obj) => {
            // get the term property only out of the whole history record
            return obj['term'];
          }).reverse()
      );
  }
  ngOnInit() {
    this.getHistory();
  }

}

// TODO: load the History from an http and use subscribe

