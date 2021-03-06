import { Component, OnInit } from '@angular/core';
import { HistoryService } from './../history.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  searchHistory: string[];
  spinning = false;
  constructor(private historyService: HistoryService) { }
  getHistory(): void {
    this.historyService.getHistory()
      .subscribe(
        searchHistory => this.searchHistory = searchHistory
          .map((obj) => {
            this.spinning = false;
            // get the term property only out of the whole history record
            return obj['term'];
          }).reverse()
      );
  }
  ngOnInit() {
    this.spinning = true;
    this.getHistory();
  }

}
