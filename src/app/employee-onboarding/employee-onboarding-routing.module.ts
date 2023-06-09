import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeOnboardingComponent } from './employee-onboarding.component';
import { ViewEmployeeInfoComponent } from './view-employee-info/view-employee-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { JobHistoryComponent } from './job-history/job-history.component';
import { EducationComponent } from './education/education.component';
import { SkillsCertificationComponent } from './skills-certification/skills-certification.component';
import { DayoffComponent } from './dayoff/dayoff.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeOnboardingComponent,
    children: [
      {
        path: '',
        component: ViewEmployeeInfoComponent,
      },
      {
        path: 'personalInfo',
        component: PersonalInfoComponent,
      },
      {
        path: 'skills',
        component: SkillsCertificationComponent,
      },
      {
        path: 'jobHistory',
        component: JobHistoryComponent,
      },
      {
        path: 'educationInfo',
        component: EducationComponent,
      },
      {
        path: 'dayoff',
        component: DayoffComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeOnboardingRoutingModule {}
