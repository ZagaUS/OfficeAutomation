import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';

import { ProjectModuleRoutingModule } from './project-module-routing.module';
import { ProjectModuleComponent } from './project-module.component';
import { ViewProjectdetailsComponent } from './view-projectdetails/view-projectdetails.component';
import { ViewTimesheetComponent } from './view-timesheet/view-timesheet.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    ProjectModuleComponent,
    ViewProjectdetailsComponent,
    ViewTimesheetComponent,
  ],
  imports: [
    CommonModule,
    ProjectModuleRoutingModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSortModule,
    NgxExtendedPdfViewerModule,
  ],
  providers: [],
  bootstrap: [ProjectModuleComponent],
})
export class ProjectModuleModule {}
