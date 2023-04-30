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
import { MdbModalModule, } from 'mdb-angular-ui-kit/modal';
import { ModaltimesheetComponent } from './modaltimesheet/modaltimesheet.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { ModalinvoiceComponent } from './modalinvoice/modalinvoice.component';
import { ModaldailyweekComponent } from './modaldailyweek/modaldailyweek.component';
import { EditTimesheetComponent } from './edit-timesheet/edit-timesheet.component';
import { MatSliderModule } from '@angular/material/slider';
import { MeetingMinuteComponent } from './meeting-minute/meeting-minute.component';
import { AddMeetingMinuteComponent } from './add-meeting-minute/add-meeting-minute.component';
import { ViewMeetingMinutesComponent } from './view-meeting-minutes/view-meeting-minutes.component';
import { CreateProjectComponent } from './create-project/create-project.component';





@NgModule({
  declarations: [
    ProjectModuleComponent,
    ViewProjectdetailsComponent,
    ViewTimesheetComponent,
    ModaltimesheetComponent,
    ModalinvoiceComponent,
    ModaldailyweekComponent,
    EditTimesheetComponent,
    MeetingMinuteComponent,
    AddMeetingMinuteComponent,
    ViewMeetingMinutesComponent,
    CreateProjectComponent,


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
    MdbModalModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [ProjectModuleComponent],
})
export class ProjectModuleModule {}
