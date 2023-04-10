import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProjectdetailsComponent } from './view-projectdetails/view-projectdetails.component';
import { ViewTimesheetComponent } from './view-timesheet/view-timesheet.component';
import { ProjectModuleComponent } from './project-module.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectModuleComponent,
    children: [
      { path: '', component: ViewProjectdetailsComponent },
      { path: 'timesheet', component: ViewTimesheetComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectModuleRoutingModule {}
