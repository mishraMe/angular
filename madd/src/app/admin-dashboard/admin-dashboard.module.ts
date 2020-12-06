import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminComponent } from './admin/admin.component';
import { PictureSelectorComponent} from './picture-selector/picture-selector.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
      AdminComponent,
      PictureSelectorComponent
],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AdminComponent,
    PictureSelectorComponent,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
