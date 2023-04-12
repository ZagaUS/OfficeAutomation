import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeOnboardingRoutingModule } from './employee-onboarding-routing.module';
import { EmployeeOnboardingComponent } from './employee-onboarding.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeSidenavComponent } from './employee-sidenav/employee-sidenav.component';
import { ViewEmployeeInfoComponent } from './view-employee-info/view-employee-info.component';

@NgModule({
  declarations: [EmployeeOnboardingComponent, EmployeeSidenavComponent, ViewEmployeeInfoComponent],
  imports: [
    CommonModule,
    EmployeeOnboardingRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export class EmployeeOnboardingModule {}
