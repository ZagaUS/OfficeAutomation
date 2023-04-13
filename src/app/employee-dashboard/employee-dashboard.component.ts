import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../base-api/api-services.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatRadioGroup } from '@angular/material/radio';

export interface PeriodicElement {
  employeeId: string;
  employeeName: String;
  employeeRole: String;
  projectAssigned: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    employeeId: '1',
    employeeName: 'employee',
    employeeRole: 'Consultant',
    projectAssigned: 'Active',
  },
];

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss'],
})
export class EmployeeDashboardComponent {
  @ViewChild(MatRadioGroup) radioGroup?: MatRadioGroup;
  // dataSource?: any;
  ELEMENT_DATA?: any[];
  dataSource?: any = new MatTableDataSource(ELEMENT_DATA);
  // categories: string[] = ['Active', 'UnAssigned', 'Completed', 'All'];
  displayedColumns: string[] = [
    'employeeId',
    'employeeName',
    'employeeRole',
    'projectAssigned',
    'action',
  ];

  constructor(private router: Router, private api: ApiServicesService) {}

  ngOnInit(): void {
    console.log("Im'in");
    // console.log("Im'in");
    // this.api.getListOfProjects().subscribe((data) => {
    //   console.log('List of projects ' + JSON.stringify(data));
    //   this.dataSource = new MatTableDataSource(data);
    //   // this.ELEMENT_DATA = data;
    // });
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

  viewEmployee(projectId?: any, projectName?: any) {
    console.log('viewProject', projectId);
    localStorage.setItem('projectId', projectId);
    localStorage.setItem('projectName', projectName);
    this.router.navigate(['/employeeOnboarding']);
  }

  //
  test() {
    alert('test');
    console.log('test');
  }
}
