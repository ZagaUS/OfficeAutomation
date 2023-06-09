import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { InvoiceApiService } from 'src/app/base-api/invoice-api.service';
// import { ApiServicesService } from '../base-api/api-services.service';
import { MatTableDataSource } from '@angular/material/table';
import { ApiServicesService } from 'src/app/base-api/api-services.service';

@Component({
  selector: 'app-invoice-module1',
  templateUrl: './invoice-module1.component.html',
  styleUrls: ['./invoice-module1.component.scss']
})
export class InvoiceModule1Component {
  dataSource?: any;
  displayedColumns: string[] = [
    'projectId',
    'projectName',
    // 'employeeRole',
    // 'projectAssigned',
    'action',
  ];
// po?:any = localStorage.getItem('po');
// sfdc?:any = localStorage.getItem('sfdc');
// totalManDays?:any=localStorage.setItem('totalManDays',this.totalManDays);

// pa?:any = localStorage.getItem('pa');
projectName?:any = localStorage.getItem('projectName');

  constructor(private router: Router, private api: InvoiceApiService, private apiService: ApiServicesService) {

  }

  ngOnInit(): void {
    this.apiService.getListOfProjectsForInvoice().subscribe((data) => {
      // console.log('List of projects ' + JSON.stringify(data));
      this.dataSource = new MatTableDataSource(data);
  });
  }
 
  applyFilterForCategory() {
   
  }

  viewInvoice(projectId?: any) {
    // console.log('project Name', projectName);
    localStorage.setItem('projectId', projectId);
   
    this.router.navigate(['/invoicedashboard/dashboard']);
  
   
  }

  viewCreditNote(projectId: any, po:any,sfdc:any, pa:any, totalManDays:any) {
    localStorage.setItem('projectId', projectId);
    localStorage.setItem('po', po);
    localStorage.setItem('sfdc',sfdc);
    localStorage.setItem('pa',pa);
    localStorage.setItem('totalManDays',totalManDays);
    console.log('project Name', this.projectName);
    localStorage.setItem('projectName', this.projectName);
    // this.api.getProjectDetails(projectId).subscribe((data) => {
    //   console.log('Employee Details ' + JSON.stringify(data));
      this.router.navigate(['/invoicedashboard/creditnoteDashboard']);
  }


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  console.log('filterValue', filterValue);
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


}
