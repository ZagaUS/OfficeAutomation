import { Component, ViewChild } from '@angular/core';
import { MatRadioGroup } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiServicesService } from '../base-api/api-services.service';
import { ProjectAssignmentComponent } from '../project-assignment/project-assignment.component';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';

export interface PeriodicElement {
  projectId: string;
  projectName: String;
  employeeName: String;
  role: String;
  projectStatus: String;
//   clientCurrency: String;
//   clientAddress: String;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     projectId: '1',
//     projectName: 'citioverdraft',
//     employeeName: 'employee',
//     role: 'Consultant',
//     projectStatus: 'Active',
//   },
//   {
//     projectId: '2',
//     projectName: 'citi ci',
//     employeeName: 'Employee',
//     role: 'Consultant',
//     projectStatus: 'UnAssigned',
//   },
//   {
//     projectId: '3',
//     projectName: 'citi ci',
//     employeeName: 'Employee',
//     role: 'Consultant',
//     projectStatus: 'Completed',
//   },
// ];

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
  assignee: any;
  unassignedCheck: boolean = false;

  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private router: Router, private api: ApiServicesService,private modalService: MdbModalService) {}

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
    if(selectedValue == "UnAssigned"){
      this.unassignedCheck = true;
    }
    else {
      this.unassignedCheck = false;
    }
  }

  viewProject(projectId?: any, projectName?: any, employeeName?: any) {
    console.log('viewProject', projectId);
    localStorage.setItem('projectId', projectId);
    localStorage.setItem('projectName', projectName);
    localStorage.setItem('employeeName', employeeName);
    this.router.navigate(['/projectModule']);
  }

  //
  test(projectId:any) {
    this.api.deleteProjectById(projectId).subscribe((data) => {
    console.log('List of Project ' +JSON.stringify(data));
  })
    alert('List of project deleted successfully');
    console.log('test');
  }
  onAdd()
  {}

  employeeAssign(projectId: any) {
    localStorage.setItem('projectId', projectId);
    this.assignee = this.modalService.open(ProjectAssignmentComponent, {
      modalClass: 'modal-lg',
    });
    this.assignee.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }
  onCreate(projectName?:any, clientAddress?: any,clientCurrency?: any, startDate?: any, endDate?: any, duration?: any, unitPrice?: any) {
    console.log('viewProject', clientAddress, clientCurrency, unitPrice);
    localStorage.setItem('projectName', projectName);
    localStorage.setItem('clientAddress', clientAddress);
    localStorage.setItem('clientCurrency', clientCurrency);
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('endDate', endDate);
    localStorage.setItem('duration', duration);
    localStorage.setItem('unitPrice', unitPrice);

    this.router.navigate(['/quote']);
  }
  onUpload(){}
}
