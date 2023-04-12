import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeOnboardingComponent } from './employee-onboarding.component';
import { EmployeeSidenavComponent } from './employee-sidenav/employee-sidenav.component';
import { ViewEmployeeInfoComponent } from './view-employee-info/view-employee-info.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeOnboardingComponent,
    children: [
      {
        path: 'sidenav',
        component: EmployeeSidenavComponent,
      },
      {
        path: 'sidenavnew',
        component: ViewEmployeeInfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeOnboardingRoutingModule {}
