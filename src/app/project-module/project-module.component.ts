import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-module',
  templateUrl: './project-module.component.html',
  styleUrls: ['./project-module.component.scss'],
})
export class ProjectModuleComponent {
  projectId?: any;
  quoteStatus?: any = localStorage.getItem('quoteStatus');
  poStatus?:any = localStorage.getItem('poStatus');
  navStatus?: any;
  constructor(public route: ActivatedRoute, private router: Router) {}

  events = [];

  withQuoteAndPo: any = [
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
  ]

  withoutQuoteAndPo: any = [
    {
      name: 'Project Details',
      link: '/projectModule',
    },
  ]

  navRouting: any = [];

  fillerContent: String[] = [
    'show the details of the project',
    'show the timesheet',
    'show the meeting minutes',
  ];

  ngOnInit(): void {
    console.log('Project ID ' + localStorage.getItem('projectId'));
    console.log('Project Name ' + localStorage.getItem('projectName'));
    this.navStatus = localStorage.getItem('navStatus');
    console.log('quotestats',this.quoteStatus);
    console.log('NAVVVVV222222222',this.navStatus);
    
    if(this.navStatus === "true"){
      this.navRouting = this.withQuoteAndPo;
    }
    else {
      this.navRouting = this.withoutQuoteAndPo;
    }

  }

  pageRoute() {
    this.router.navigate(['/timesheet']);
  }
}
