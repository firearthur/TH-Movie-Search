import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryPageComponent } from './../history-page/history-page.component';
const routes: Routes = [
  // { path: '', redirectTo: '/SearchPage', pathMatch: 'full' },
  // {path: 'search', component: SearchPage},
  {path: 'history', component: HistoryPageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
