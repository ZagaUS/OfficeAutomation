import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'projectdashboard', component: ProjectDashboardComponent },
  {
    path: 'projectModule',
    loadChildren: () =>
      import(`./project-module/project-module.module`).then(
        (m) => m.ProjectModuleModule
      ),
  },
  {
    path: 'invoicedashboard',
    loadChildren: () =>
      import(`./invoice-module/invoice-module.module`).then(
        (m) => m.InvoiceModuleModule
      ),
  },
  { path: 'employeedashboard', component: EmployeeDashboardComponent },
  {
    path: 'employeeOnboarding',
    loadChildren: () =>
      import(`./employee-onboarding/employee-onboarding.module`).then(
        (m) => m.EmployeeOnboardingModule
      ),
  },
  {
    path: 'hiringProcess',
    loadChildren: () =>
      import(`./hiring-process/hiring-process.module`).then(
        (m) => m.HiringProcessModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
