import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: '/SearchPage', pathMatch: 'full' },
//   {path: 'search', component: SearchPage},
//   {path: 'history', component: HistoryPage}
// ];

@NgModule({
  // imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
