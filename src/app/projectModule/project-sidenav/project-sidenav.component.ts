import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-sidenav',
  templateUrl: './project-sidenav.component.html',
  styleUrls: ['./project-sidenav.component.scss'],
})
export class ProjectSidenavComponent {
  projectId?: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  events = [];

  navRouting: any = [
    {
      name: 'Project Details',
      link: '/projectDetails',
    },
    {
      name: 'Timesheet',
      link: '/timesheet',
    },
    {
      name: 'Meeting minnutes',
      link: '/meetingMinutes',
    },
  ];

  fillerContent: String[] = [
    'show the details of the project',
    'show the timesheet',
    'show the meeting minutes',
  ];

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('projectId');
    console.log(`projectId: ${this.projectId}`);
  }

  pageRoute() {
    this.router.navigate(['/timesheet']);
  }
}
