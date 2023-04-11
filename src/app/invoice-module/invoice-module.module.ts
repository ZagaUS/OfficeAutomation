import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { InvoiceModuleRoutingModule } from './invoice-module-routing.module';
import { InvoiceModuleComponent } from './invoice-module.component';

@NgModule({
  declarations: [InvoiceModuleComponent],
  imports: [
    CommonModule,
    InvoiceModuleRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
  ],
})
export class InvoiceModuleModule {}
