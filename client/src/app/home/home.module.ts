import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './../account/account.component';
import { AboutComponent } from './../about/about.component';
import { ChatComponent } from './../chat/chat.component';
import { HomeComponent } from './home/home.component';


const homeRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'chat', component: ChatComponent },
      { path: 'about', component: AboutComponent },
      { path: 'account', component: AccountComponent }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ChatComponent,
    AboutComponent,
    AccountComponent
  ],
  imports: [
    RouterModule.forChild(homeRoute),
    CommonModule
  ]
})
export class HomeModule { }
