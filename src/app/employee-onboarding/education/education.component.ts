import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeApiService } from 'src/app/base-api/employee-api.service';

export interface PeriodicElement {
  degree: string;
  specialization: String;
  year: String;
  graduate: String;
  // field: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    degree: 'MSC',
    specialization: 'something',
    year: '2',
    graduate: 'Graduated'
    // field: 'developer'
  },
  {
    degree: 'BSC',
    specialization: 'something',
    year: '3',
    graduate: 'Graduated'
  },
];


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})

export class EducationComponent {
  
  myForm!: FormGroup;
  isReadOnly = true;
  employeeId?: any = localStorage.getItem('employeeId');

  @ViewChild(MatRadioGroup) radioGroup?: MatRadioGroup;
  // dataSource?: any;
     
  ELEMENT_DATA?: any[];
  dataSource?: any;
  // categories: string[] = ['Active', 'UnAssigned', 'Completed', 'All'];
  displayedColumns: string[] = [
    'degree',
    'specialization',
    'year',
    'graduate',
    'action',
  ];

  constructor(private router: Router, private api: EmployeeApiService) {}

  ngOnInit(): void {
    console.log("Im'in");
    console.log("Im'in");
    // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.api.getListOfEducation(this.employeeId).subscribe((data) => {
      console.log('List of projects ' + JSON.stringify(data));
      this.dataSource = new MatTableDataSource(data.educationDetails);
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

  test() {
    alert('test');
    console.log('test');
  }
}
