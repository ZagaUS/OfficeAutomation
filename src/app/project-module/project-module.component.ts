import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-module',
  templateUrl: './project-module.component.html',
  styleUrls: ['./project-module.component.scss'],
})
export class ProjectModuleComponent {
  projectId?: any;

  constructor(public route: ActivatedRoute, private router: Router) {}

  events = [];

  navRouting: any = [
    {
      name: 'Project Details',
      link: '/projectModule',
    },
    {
      name: 'Timesheet',
      link: 'timesheet',
    },
    {
      name: 'Meeting Minutes',
      link: 'meetingMinutes',
    },
  ];

  fillerContent: String[] = [
    'show the details of the project',
    'show the timesheet',
    'show the meeting minutes',
  ];

  ngOnInit(): void {
    console.log('Project ID ' + localStorage.getItem('projectId'));
    console.log('Project Name ' + localStorage.getItem('projectName'));
  }

  pageRoute() {
    this.router.navigate(['/timesheet']);
  }
}
