import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';

const routes: Route [] = [
  {path: '', component: Sub1Component},
  {path: 'comp1', component: Sub1Component},
  {path: 'comp2', component: Sub2Component},
];



@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: []
})
export class Sub1routingModule { }