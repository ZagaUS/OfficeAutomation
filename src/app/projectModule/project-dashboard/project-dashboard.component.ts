import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  projectId: string;
  projectName: String;
  employeeName: String;
  role: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    projectId: '1',
    projectName: 'citioverdraft',
    employeeName: 'employee',
    role: 'Consultant',
  },
  {
    projectId: '2',
    projectName: 'citi ci',
    employeeName: 'Employee',
    role: 'Consultant',
  },
];

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss'],
})
export class ProjectDashboardComponent {
  displayedColumns: string[] = [
    'projectId',
    'projectName',
    'employeeName',
    'role',
    'action',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private router: Router) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('filterValue', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewProject() {
    this.router.navigate([
      '/projectDetails',
      this.dataSource.data[0].projectId,
    ]);
  }

  test() {
    alert('test');
    console.log('test');
  }
}
