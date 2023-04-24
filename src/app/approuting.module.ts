import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { App2Component } from './app2/app2.component';
import { HomeComponent } from './home/home.component';

const routers: Route[] = [
  {path: '', component: HomeComponent },
  {path: 'app2', component: App2Component },
  {path: 'home', component: HomeComponent },
  {path: 'lazy', loadChildren:() => import ('./sub1/sub1.module').then(m=> m.Sub1Module ) },
];


@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routers)
  ],
  declarations: [], 
  exports: [RouterModule]
})
export class ApproutingModule { }