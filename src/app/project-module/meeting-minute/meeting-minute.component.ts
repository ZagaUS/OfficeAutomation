import { Component, Input, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/base-api/api-services.service';

export interface PeriodicElement {
  projectId: string;
  projectName: String;
  employeeName: String;
  date: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    projectId: '1',
    projectName: 'citioverdraft',
    employeeName: 'employee',
    date: 'Consultant'
  },
  {
    projectId: '2',
    projectName: 'citi ci',
    employeeName: 'Employee',
    date: 'Consultant'
  },
  {
    projectId: '3',
    projectName: 'citi ci',
    employeeName: 'Employee',
    date: 'Consultant'
  },
];

@Component({
  selector: 'app-meeting-minute',
  templateUrl: './meeting-minute.component.html',
  styleUrls: ['./meeting-minute.component.scss']
})
export class MeetingMinuteComponent {
    
  @ViewChild(MatRadioGroup) radioGroup?: MatRadioGroup;
  // dataSource?: any;
  ELEMENT_DATA?: any[];
    dataSource?: any = new MatTableDataSource(ELEMENT_DATA);
  // categories: string[] = ['Active', 'UnAssigned', 'Completed', 'All'];
  displayedColumns: string[] = [
    'projectId',
    'projectName',
    'employeeName',
    'date',
    // 'role',
    'action',
  ];

  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private router: Router, private api: ApiServicesService) {
    }

  ngOnInit(): void {
    console.log("Im'in");
    // console.log("Im'in");
    // this.api.getListOfProjects().subscribe((data) => {
      // console.log('List of projects ' + JSON.stringify(data));
      // this.dataSource = new MatTableDataSource(data);
      // this.ELEMENT_DATA = data;
    // });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('filterValue', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  viewProject(projectId?: any, projectName?: any) {
    console.log('viewProject', projectId);
    localStorage.setItem('projectId', projectId);
    localStorage.setItem('projectName', projectName);
    // this.router.navigate(['/projectModule']);
    this.router.navigate(['/viewMeeting']);
  }

  //
  test() {
    alert('Coming soon!');
    console.log('test');
  }


      
    onAdd() {
      this.router.navigate(['addMeeting'])
    }
  
}