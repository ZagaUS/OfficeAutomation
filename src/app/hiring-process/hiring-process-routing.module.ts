import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringPageComponent } from './hiring-page/hiring-page.component';
import { HiringProcessComponent } from './hiring-process.component';
import { PamWorkflowComponent } from './pam-workflow/pam-workflow.component';
import { ViewTrackHiringWorkflowComponent } from './view-track-hiring-workflow/view-track-hiring-workflow.component';

const routes: Routes = [
  {
    path: '',
    component: HiringProcessComponent,
    children: [
      {
        path: '',
        component: HiringPageComponent,
      },
      {
        path: 'pamProcess',
        component: PamWorkflowComponent,
      },
      {
        path: 'viewTrackHiringWorkflow',
        component: ViewTrackHiringWorkflowComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiringProcessRoutingModule {}
