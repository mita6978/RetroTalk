import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewComponent } from './preview/preview.component';

const previewRoute: Routes = [
  {
    path: '',
    component: PreviewComponent,
  }
];

@NgModule({
  declarations: [PreviewComponent],
  imports: [
    RouterModule.forChild(previewRoute),
    CommonModule
  ]
})
export class PreviewModule { }
