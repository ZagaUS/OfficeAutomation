import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { CreateProjectComponent } from './project-module/create-project/create-project.component';
import { CreateEmployeeComponent } from './employee-onboarding/create-employee/create-employee.component';
import { QuoteCreationComponent } from './project-module/quote-creation/quote-creation.component';
import { QuoteComponent } from './project-module/quote/quote.component';
import { PurchaseOrderComponent } from './project-module/purchase-order/purchase-order.component';
import { ViewQuoteComponent } from './project-module/view-quote/view-quote.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: 'landing', component: LandingPageComponent },
  { path: 'projectdashboard', component: ProjectDashboardComponent },
  { path: 'createProject', component: CreateProjectComponent},
  { path: 'createEmployee', component: CreateEmployeeComponent},
  { path: 'quoteCreation', component: QuoteCreationComponent},
  { path: 'quote' , component: QuoteComponent},
  { path: 'purchaseOrder', component: PurchaseOrderComponent},
  { path: 'viewQuote', component: ViewQuoteComponent},
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
