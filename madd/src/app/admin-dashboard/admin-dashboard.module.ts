import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminComponent } from './admin/admin.component';
import { PictureSelectorComponent} from './picture-selector/picture-selector.component';



@NgModule({
  declarations: [
      AdminComponent,
      PictureSelectorComponent
],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ],
  exports: [
    AdminComponent,
    PictureSelectorComponent,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
