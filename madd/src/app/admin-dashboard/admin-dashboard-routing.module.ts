import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/admin-dashboard/admin/admin.component';
import { PictureSelectorComponent } from 'src/app/admin-dashboard/picture-selector/picture-selector.component';

 const routes: Routes = [
    { path: '',
      component: AdminComponent,
      children: [
        {
          path: 'pictures/:action', component: PictureSelectorComponent
        }
      ],
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
