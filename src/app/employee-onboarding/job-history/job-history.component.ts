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

const ELEMENT_DATA: PeriodicElement[] = [
  {
    companyName: 'zaga',
    experience: '1',
    startDate: '22/1/2023',
    endDate: '22/6/2023',
    field: 'developer'
  },
  {
    companyName: 'ZAGAGA',
    experience: '2',
    startDate: '22/2/2022',
    endDate: '2/2/2020',
    field: 'developer'
  },
];
@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.scss'],
})
export class JobHistoryComponent {
  myForm!: FormGroup;
  isReadOnly = true;
  employeeId?: any = localStorage.getItem('employeeId');

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
      const updatedjobHistoryDetails = data.jobHistoryDetails.map((element: PeriodicElement) => {
        return {
          companyName: element.companyName ?? 'N/A',
          experience: element.experience ?? 'N/A',
          startDate: element.startDate ?? 'N/A',
          endDate: element.endDate.trim() === '' ? 'N/A' : element.endDate,
          field: element.field ?? 'N/A'
        };
      });
      console.log(updatedjobHistoryDetails);
      this.dataSource = new MatTableDataSource(updatedjobHistoryDetails);
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

  
  test() {
    alert('test');
    console.log('test');
  }
}

