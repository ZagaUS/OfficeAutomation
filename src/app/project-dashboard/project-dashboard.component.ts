import { Component, ViewChild } from '@angular/core';
import { MatRadioGroup } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiServicesService } from '../base-api/api-services.service';

export interface PeriodicElement {
  projectId: string;
  projectName: String;
  employeeName: String;
  role: String;
  projectStatus: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    projectId: '1',
    projectName: 'citioverdraft',
    employeeName: 'employee',
    role: 'Consultant',
    projectStatus: 'Active',
  },
  {
    projectId: '2',
    projectName: 'citi ci',
    employeeName: 'Employee',
    role: 'Consultant',
    projectStatus: 'UnAssigned',
  },
  {
    projectId: '3',
    projectName: 'citi ci',
    employeeName: 'Employee',
    role: 'Consultant',
    projectStatus: 'Completed',
  },
];

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss'],
})
export class ProjectDashboardComponent {
  @ViewChild(MatRadioGroup) radioGroup?: MatRadioGroup;
  // dataSource?: any;
  ELEMENT_DATA?: any[];
  dataSource?: any;
  categories: string[] = ['Active', 'UnAssigned', 'Completed', 'All'];
  displayedColumns: string[] = [
    'projectId',
    'projectName',
    'employeeName',
    // 'role',
    'action',
  ];

  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private router: Router, private api: ApiServicesService) {}

  ngOnInit(): void {
    console.log("Im'in");
    // console.log("Im'in");
    this.api.getListOfProjects().subscribe((data) => {
      console.log('List of projects ' + JSON.stringify(data));
      this.dataSource = new MatTableDataSource(data);
      // this.ELEMENT_DATA = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('filterValue', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterForCategory() {
    const selectedValue = this.radioGroup?.value;
    if (selectedValue === 'All') {
      this.dataSource.filter = ''; // clear filter
    } else {
      console.log('applyFilterForCategory' + this.radioGroup?.value);
      this.dataSource.filter = selectedValue;
    }
  }

  viewProject(projectId?: any, projectName?: any) {
    console.log('viewProject', projectId);
    localStorage.setItem('projectId', projectId);
    localStorage.setItem('projectName', projectName);
    this.router.navigate(['/projectModule']);
  }

  //
  test() {
    alert('test');
    console.log('test');
  }
}
