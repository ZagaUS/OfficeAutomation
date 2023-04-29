import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProjectdetailsComponent } from './view-projectdetails/view-projectdetails.component';
import { ViewTimesheetComponent } from './view-timesheet/view-timesheet.component';
import { ProjectModuleComponent } from './project-module.component';
import { EditTimesheetComponent } from './edit-timesheet/edit-timesheet.component';
import { MeetingMinuteComponent } from './meeting-minute/meeting-minute.component';
import { AddMeetingMinuteComponent } from './add-meeting-minute/add-meeting-minute.component';
import { ViewMeetingMinutesComponent } from './view-meeting-minutes/view-meeting-minutes.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectModuleComponent,
    children: [
      { path: '', component: ViewProjectdetailsComponent },
      { path: 'timesheet', component: ViewTimesheetComponent },
      { path: 'editTimesheet', component: EditTimesheetComponent },
      { path: 'meetingMinutes', component: MeetingMinuteComponent },
      { path: 'addMeeting', component: AddMeetingMinuteComponent },
      { path: 'viewMeeting', component: ViewMeetingMinutesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectModuleRoutingModule {}
