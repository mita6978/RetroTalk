import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './../account/account.component';
import { AboutComponent } from './../about/about.component';
import { ChatComponent } from './../chat/chat.component';
import { HomeComponent } from './home/home.component';

import { MakeCallComponent } from '../chat/make-call/make-call.component';
import { AnswerCallModalComponent } from './home/answer-call-modal/answer-call-modal.component';


const homeRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'chat', component: ChatComponent },
      { path: 'about', component: AboutComponent },
      { path: 'account', component: AccountComponent },
      { path: '',   redirectTo: '/home/chat', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ChatComponent,
    AboutComponent,
    AccountComponent,
    MakeCallComponent,
    AnswerCallModalComponent
  ],
  imports: [
    RouterModule.forChild(homeRoute),
    CommonModule
  ],
  entryComponents: [
    MakeCallComponent,
    AnswerCallModalComponent
  ]
})
export class HomeModule { }
