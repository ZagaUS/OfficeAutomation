import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../base-api/api-services.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatRadioGroup } from '@angular/material/radio';
import { EmployeeApiService } from '../base-api/employee-api.service';

export interface PeriodicElement {
  employeeId: string;
  employeeName: String;
  employeeRole: String;
  projectAssignmentStatus: Boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    employeeId: '1',
    employeeName: 'employee',
    employeeRole: 'Consultant',
    projectAssignmentStatus: true,
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
  dataSource?: any;
  // categories: string[] = ['Active', 'UnAssigned', 'Completed', 'All'];
  displayedColumns: string[] = [
    'employeeId',
    'employeeName',
    'employeeRole',
    // 'projectAssigned',
    'action',
  ];

  constructor(private router: Router, private api: EmployeeApiService) {}

  ngOnInit(): void {
    console.log("Im'in");
    console.log("Im'in");
    this.api.getEmployeeDetail().subscribe((data) => {
      console.log('List of projects ' + JSON.stringify(data));
      const updatedData = data.map((element: PeriodicElement) => {
        console.log('projectAssigned value:', element.projectAssignmentStatus);
        return {
          employeeId: element.employeeId,
          employeeName: element.employeeName,
          employeeRole: element.employeeRole,
          projectAssigned: element.projectAssignmentStatus ? 'Active' : 'Inactive'
        };
      });
      this.dataSource = new MatTableDataSource(updatedData);
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

  viewEmployee(employeeId?: any, employeeName?: any) {
    console.log('viewEmployee', employeeId);
    localStorage.setItem('employeeId', employeeId);
    localStorage.setItem('employeeName', employeeName);
    this.router.navigate(['/employeeOnboarding']);
  }

  test(employeeId: any) {
    this.api.deleteEmployee(employeeId).subscribe((data) => {
      console.log('Employee Details ' + JSON.stringify(data));

    })
    alert('employee deleted');
    console.log('test');
  }

  onAdd() {
    
  }

}
