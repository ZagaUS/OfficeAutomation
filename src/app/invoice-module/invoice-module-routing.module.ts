import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceModuleComponent } from './invoice-module.component';

const routes: Routes = [{ path: '', component: InvoiceModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceModuleRoutingModule {}
