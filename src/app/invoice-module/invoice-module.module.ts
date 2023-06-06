import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { InvoiceModuleRoutingModule } from './invoice-module-routing.module';
import { InvoiceModuleComponent } from './invoice-module.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { CreditNoteComponent } from './credit-note/credit-note.component';
// import { InvoiceDashboardComponent } from './invoice-dashboard/invoice-dashboard.component';

@NgModule({
  declarations: [InvoiceModuleComponent],
  imports: [
    CommonModule,
    InvoiceModuleRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
})
export class InvoiceModuleModule {}
