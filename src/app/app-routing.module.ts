import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
// import { ViewProjectdetailsComponent } from './projectModule/view-projectdetails/view-projectdetails.component';
// import { TimesheetComponent } from './projectModule/timesheet/timesheet.component';
// import { MeetingMinutesComponent } from './projectModule/meeting-minutes/meeting-minutes.component';
import { LoginComponent } from './login/login.component';
import { ProjectModuleRoutingModule } from './project-module/project-module-routing.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'projectdashboard', component: ProjectDashboardComponent },
  {
    path: 'projectModule',
    loadChildren: () =>
      import(`./project-module/project-module.module`).then(
        (m) => m.ProjectModuleModule
      ),
  },
  // { path: 'projectDetails/:projectId', component: ViewProjectdetailsComponent },
  // { path: 'timesheet', component: TimesheetComponent },
  // { path: 'meetingminutes', component: MeetingMinutesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
