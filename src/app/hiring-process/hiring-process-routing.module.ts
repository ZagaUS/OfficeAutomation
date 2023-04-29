import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringPageComponent } from './hiring-page/hiring-page.component';
import { HiringPamProcessesComponent } from './hiring-pam-processes/hiring-pam-processes.component';

const routes: Routes = [
  {
    path : '', component: HiringPageComponent, children: [
    {
      path : 'hiring-pam-process', 
      component: HiringPamProcessesComponent
    }
  ] 
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HiringProcessRoutingModule { }
