import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HistoryPageComponent } from './history-page/history-page.component';
import { SearchHistoryListComponent } from './search-history-list/search-history-list.component';
import { SearchHistoryListItemComponent } from './search-history-list-item/search-history-list-item.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HistoryPageComponent,
    SearchHistoryListComponent,
    SearchHistoryListItemComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
