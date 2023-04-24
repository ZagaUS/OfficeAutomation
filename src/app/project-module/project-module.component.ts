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
      name: 'PROJECT DETAILS',
      link: '/projectModule',
    },
    {
      name: 'TIMESHEET',
      link: 'timesheet',
    },
    {
      name: 'MEETING MINUTES',
      link: 'meetingMinutes',
      route: this.route,
    },
  ];

  fillerContent: String[] = [
    'show the details of the project',
    'show the timesheet',
    'show the meeting minutes',
  ];

  ngOnInit(): void {
    console.log('Project ID ' + localStorage.getItem('projectId'));
  }

  pageRoute() {
    this.router.navigate(['/timesheet']);
  }
}
