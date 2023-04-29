import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringPageComponent } from './hiring-page/hiring-page.component';
import { HiringProcessComponent } from './hiring-process.component';
import { HiringPamDashboardComponent } from './hiring-pam-dashboard/hiring-pam-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HiringProcessComponent,
    children: [
      {
        path: '',
        component: HiringPageComponent,
      },
      {
        path: 'pamProcess',
        component: HiringPamDashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiringProcessRoutingModule {}
