import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProjectdetailsComponent } from './view-projectdetails/view-projectdetails.component';
import { ViewTimesheetComponent } from './view-timesheet/view-timesheet.component';
import { ProjectModuleComponent } from './project-module.component';
import { DailyTimesheetComponent } from './daily-timesheet/daily-timesheet.component';
import { WeeklyTimesheetComponent } from './weekly-timesheet/weekly-timesheet.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectModuleComponent,
    children: [
      { path: '', component: ViewProjectdetailsComponent },
      { path: 'timesheet', component: ViewTimesheetComponent },
    ],
  },
  { path: 'dailytimesheet', component: DailyTimesheetComponent},
  { path: 'weeklytimesheet', component:WeeklyTimesheetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectModuleRoutingModule {}
