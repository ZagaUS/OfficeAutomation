import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiringProcessRoutingModule } from './hiring-process-routing.module';
import { HiringPageComponent } from './hiring-page/hiring-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { HiringProcessComponent } from './hiring-process.component';
import { MatCardModule } from '@angular/material/card';
import { HiringPamDashboardComponent } from './hiring-pam-dashboard/hiring-pam-dashboard.component';
import { ViewTrackHiringWorkflowComponent } from './view-track-hiring-workflow/view-track-hiring-workflow.component';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    HiringPageComponent,
    HiringProcessComponent,
    HiringPamDashboardComponent,
    ViewTrackHiringWorkflowComponent,
  ],
  imports: [
    CommonModule,
    HiringProcessRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatCardModule,
  ],
})
export class HiringProcessModule {}
