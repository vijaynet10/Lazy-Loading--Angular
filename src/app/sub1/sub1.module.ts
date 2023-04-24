import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sub1Component } from './sub1/sub1.component';
import { Sub1routingModule } from './sub1.routing.module';

@NgModule({
  imports: [
    CommonModule,Sub1routingModule
  ],
  declarations: [Sub1Component], 
  
})
export class Sub1Module { }