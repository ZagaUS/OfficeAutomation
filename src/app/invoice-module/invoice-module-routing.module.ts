import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceModuleComponent } from './invoice-module.component';
import { InvoiceDashboardComponent } from './invoice-dashboard/invoice-dashboard.component';
import { CreditNoteComponent } from './credit-note/credit-note.component';
import { InvoiceModule1Component } from './invoice-module1/invoice-module1.component';

const routes: Routes = [{
  path: '',
  component: InvoiceModuleComponent,
  children: [
    { path: '', component: InvoiceModule1Component },
    { path: 'dashboard', component: InvoiceDashboardComponent}
  ],
},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceModuleRoutingModule {}
