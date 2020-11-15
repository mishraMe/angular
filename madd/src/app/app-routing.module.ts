import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from 'src/app/play/play.component';
import { StartComponent } from 'src/app/start/start.component';
import { AdminComponent } from 'src/app/admin-dashboard/admin/admin.component';

 const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: StartComponent},
    { path: 'play', component: PlayComponent},
    { path: 'admin',
      loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule)
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
