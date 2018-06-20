import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchSelected: boolean;
  historySelected: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  ngAfterContentChecked() {
    if (this.router.url === '/search') {
      this.searchSelected = true;
      this.historySelected = false;
    } else if (this.router.url === '/history') {
      this.searchSelected = false;
      this.historySelected = true;
    }
  }

}
