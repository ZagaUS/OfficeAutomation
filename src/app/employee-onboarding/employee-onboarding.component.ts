import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-onboarding',
  templateUrl: './employee-onboarding.component.html',
  styleUrls: ['./employee-onboarding.component.scss'],
})
export class EmployeeOnboardingComponent {
  constructor(private router: Router) {}

  navRouting: any = [
    {
      name: 'Employee Details',
      link: '/employeeOnboarding',
    },
    {
      name: 'Personal Information',
      link: 'personalInfo',
    },
    {
      name: 'Skills',
      link: 'skills',
    },
    {
      name: 'Job History',
      link: 'jobHistory',
    },
    {
      name: 'Education Information',
      link: 'educationInfo',
    },
    {
      name: 'Day-Off Information',
      link: 'dayoff',
    },
  ];

  ngOnInit(): void {
    console.log('Project ID ' + localStorage.getItem('projectId'));
  }

  pageRoute() {
    this.router.navigate(['/timesheet']);
  }
}
