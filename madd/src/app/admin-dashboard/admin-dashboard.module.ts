import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureSelectorComponent } from './picture-selector/picture-selector.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
      PictureSelectorComponent,
      AdminComponent
],
  imports: [
    CommonModule
  ]
})
export class AdminDashboardModule { }
