import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { App2Component } from './app2/app2.component';
import { ApproutingModule } from './approuting.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ApproutingModule
  ],
  declarations: [AppComponent, HomeComponent, App2Component], 
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }