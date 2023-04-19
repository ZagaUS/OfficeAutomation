import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/base-api/api-services.service';
import { EmployeeApiService } from 'src/app/base-api/employee-api.service';

export interface PeriodicElement {
  companyName: string;
  experience: String;
  startDate: String;
  endDate: String;
  field: String;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     companyName: 'zaga',
//     experience: '1',
//     startDate: '22/1/2023',
//     endDate: '22/6/2023',
//     field: 'developer'
//   },
//   {
//     companyName: 'ZAGAGA',
//     experience: '2',
//     startDate: '22/2/2022',
//     endDate: '2/2/2020',
//     field: 'developer'
//   },
// ];
@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.scss'],
})
export class JobHistoryComponent {
  myForm!: FormGroup;
  isReadOnly = true;
  employeeId: any = 2;

  @ViewChild(MatRadioGroup) radioGroup?: MatRadioGroup;
  // dataSource?: any;
     
  ELEMENT_DATA?: any[];
  dataSource?: any;
  // categories: string[] = ['Active', 'UnAssigned', 'Completed', 'All'];
  displayedColumns: string[] = [
    'companyName',
    'experience',
    'startDate',
    'endDate',
    'field',
    'action',
  ];

  constructor(private router: Router, private api: EmployeeApiService) {}

  ngOnInit(): void {
    console.log("Im'in");
    console.log("Im'in");

    this.api.getListOfJobHistory(this.employeeId).subscribe((data) => {
      console.log('List of projects ' + JSON.stringify(data));
      this.dataSource = new MatTableDataSource(data.jobHistoryDetails);
      // this.ELEMENT_DATA = data;
    });
    
    // this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
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

  // viewEmployee(projectId?: any, projectName?: any) {
  //   console.log('viewProject', projectId);
  //   localStorage.setItem('projectId', projectId);
  //   localStorage.setItem('projectName', projectName);
  //   this.router.navigate(['/employeeOnboarding']);
  // }

  //
  test() {
    alert('test');
    console.log('test');
  }
}

//   constructor(private fb: FormBuilder) {

// }
// ngOnInit() {
//   // this.http.get('/api/employee').subscribe((employee: any) => {
//   // Use the response to set the initial values of the form fields
//   this.myForm = this.fb.group({
//   companyName: ['ZAGAA'],
//   experience: ['3'],
//   startDate: ['2022-01-01'],
//   endDate: ['2022-01-01'],
//   field:['Devops'],
// });
// }
// //  });

// onEdit() {
//   this.isReadOnly = false;
// }

//   onSubmit() {
//     this.isReadOnly = false;
//     const formValues = this.myForm.value;
//     console.log(formValues);

//     }

// }
