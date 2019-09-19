import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {T1Component} from './t1/t1.component'
import {T2Component} from './t2/t2.component'

const routes: Routes = [{path:'t1',component:T1Component},
{path:'t2',component:T2Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[T1Component,T2Component];
