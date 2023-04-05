import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashboardComponent } from './projectModule/project-dashboard/project-dashboard.component';
import { ViewProjectdetailsComponent } from './projectModule/view-projectdetails/view-projectdetails.component';
import { TimesheetComponent } from './projectModule/timesheet/timesheet.component';
import { MeetingMinutesComponent } from './projectModule/meeting-minutes/meeting-minutes.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'projectdashboard', component: ProjectDashboardComponent },
  { path: 'projectDetails/:projectId', component: ViewProjectdetailsComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'meetingminutes', component: MeetingMinutesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
