import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { InvoiceApiService } from 'src/app/base-api/invoice-api.service';
import { ApiServicesService } from '../base-api/api-services.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-invoice-module',
  templateUrl: './invoice-module.component.html',
  styleUrls: ['./invoice-module.component.scss'],
})

export class InvoiceModuleComponent {
  dataSource?: any;
  displayedColumns: string[] = [
    'projectId',
    'projectName',
    // 'employeeRole',
    // 'projectAssigned',
    'action',
  ];



  constructor(private router: Router, private api: InvoiceApiService, private apiService: ApiServicesService) {

  }

  // ngOnInit(): void {
  //   this.apiService.getListOfProjectsForInvoice().subscribe((data) => {
  //     console.log('List of projects ' + JSON.stringify(data));
  //     this.dataSource = new MatTableDataSource(data);
  // });
  // }
 
  // applyFilterForCategory() {
   
  // }

  // viewInvoice(projectId?: any, projectName?: any) {
  //   console.log('project Name', projectName);
  //   localStorage.setItem('projectId', projectId);
  //   localStorage.setItem('projectName', projectName);
  //   this.router.navigate(['/invoicedashboard/dashboard']);
  
   
  // }

  // viewCreditNote(projectId: any) {
  //   this.api.getProjectDetails(projectId).subscribe((data) => {
  //     console.log('Employee Details ' + JSON.stringify(data));
      
  //     this.router.navigate(['/invoicedashboard/creditnoteDashboard']);
  //     localStorage.setItem('projectId', projectId);
      // localStorage.setItem('projectName', projectName);
    // });

}
// applyFilter(event: Event) {
//   const filterValue = (event.target as HTMLInputElement).value;
//   console.log('filterValue', filterValue);
//   this.dataSource.filter = filterValue.trim().toLowerCase();
// }


