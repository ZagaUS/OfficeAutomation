import { Component, ViewChild } from '@angular/core';
import { MatRadioGroup } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiServicesService } from '../base-api/api-services.service';
import { ProjectAssignmentComponent } from '../project-assignment/project-assignment.component';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Location } from '@angular/common';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
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
  correct?: any = true;
  wrong?:any = false;
  dataSource?: any;
  categories: string[] = ['Active', 'UnAssigned', 'All'];
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

  constructor(private snackBar: MatSnackBar,private router: Router, private api: ApiServicesService,private modalService: MdbModalService, private location: Location) {}

  ngOnInit(): void {
    console.log("Im'in");
    // console.log("Im'in");
    localStorage.setItem('navStatus',this.wrong);
    this.api.getListOfProjects().subscribe((data) => {
      console.log('List of projects ' + JSON.stringify(data));
      this.dataSource = new MatTableDataSource(data);
      setTimeout(() => {
        // this.location.go(this.location.path());
        window.location.reload();
      }, 500000);
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
  openSnackbar(message: string, duration: number) {
    const config: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom', // Change the vertical position to 'bottom'
      panelClass: ['center-snackbar'],
    };
    this.snackBar.open(message, 'Close', {
      duration: duration,
    });
  }

  viewProject(projectId?: any, projectName?: any, employeeName?: any, quoteStatus?:any, poStatus?:any, pdfStatus?:any) {
    console.log('viewProject', projectId + " qout " + quoteStatus + poStatus);
    localStorage.setItem('projectId', projectId);
    localStorage.setItem('projectName', projectName);
    localStorage.setItem('employeeName', employeeName);
    localStorage.setItem('pdfStatus', pdfStatus);
    
    this.router.navigate(['/projectModule']);
    if(quoteStatus == true && poStatus == true){
      localStorage.setItem('navStatus', this.correct);
    }
       else {
        localStorage.setItem('navStatus', this.wrong);
    }
  }

  //
  test(projectId:any) {
    this.api.deleteProjectById(projectId).subscribe((data) => {
    console.log('List of Project ' +JSON.stringify(data));
  })
    // alert('Project deleted successfully');
    console.log('test');
    this.openSnackbar('Deleted successfully', 1500);
    this.location.back();
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
  onCreate(projectName?:any, clientAddress?: any,clientCurrency?: any, startDate?: any, endDate?: any, duration?: any, unitPrice?: any, projectId?: any) {
    console.log('viewProject', clientAddress, clientCurrency, unitPrice, projectName, projectId);
    localStorage.setItem('projectName', projectName);
    localStorage.setItem('projectId', projectId);
    localStorage.setItem('clientAddress', clientAddress);
    localStorage.setItem('clientCurrency', clientCurrency);
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('endDate', endDate);
    localStorage.setItem('duration', duration);
    localStorage.setItem('unitPrice', unitPrice);

    this.router.navigate(['/quote']);
  }
  onUpload(projectName?: any, projectId?:any){
    localStorage.setItem('projectName', projectName);
    localStorage.setItem('projectId', projectId);


    this.router.navigate(['/purchaseOrder']);

  }
}
