import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiTestingComponent } from './api-testing.component';

import { Routes, RouterModule } from '@angular/router';

const apiTest: Routes = [
  {
    path: '',
    component: ApiTestingComponent,
  }
];


@NgModule({
  declarations: [ApiTestingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(apiTest)
  ]
})
export class ApiTestingModule { }
