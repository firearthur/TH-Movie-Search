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
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchListItemComponent } from './search-list-item/search-list-item.component';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HistoryPageComponent,
    SearchHistoryListComponent,
    SearchHistoryListItemComponent,
    SearchPageComponent,
    SearchInputComponent,
    SearchListComponent,
    SearchListItemComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
