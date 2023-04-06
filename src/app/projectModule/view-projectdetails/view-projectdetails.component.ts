import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-projectdetails',
  templateUrl: './view-projectdetails.component.html',
  styleUrls: ['./view-projectdetails.component.scss'],
})
export class ViewProjectdetailsComponent {
  projectId?: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  events = [];

  fillerNav: String[] = ['Project Details', 'Timesheet', 'Meeting Minutes'];

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
