import { NgModule } from '@angular/core';
import { ReportsComponent } from './reports/reports.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ReportsComponent} //default route inside module
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) //child routes for lazy loading
  ]
})
export class ReportsModule { }
