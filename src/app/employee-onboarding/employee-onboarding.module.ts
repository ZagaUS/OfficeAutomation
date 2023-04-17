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
import { ViewEmployeeInfoComponent } from './view-employee-info/view-employee-info.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { JobHistoryComponent } from './job-history/job-history.component';
import { EducationComponent } from './education/education.component';
import { MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [EmployeeOnboardingComponent, ViewEmployeeInfoComponent, PersonalInfoComponent, JobHistoryComponent, EducationComponent],
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
    MatToolbarModule,
    MatDatepickerModule
  ],
})
export class EmployeeOnboardingModule {}
