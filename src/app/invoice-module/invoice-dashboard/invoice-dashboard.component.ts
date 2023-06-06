import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatRadioGroup } from '@angular/material/radio';
import { InvoiceApiService } from 'src/app/base-api/invoice-api.service';



@Component({
  selector: 'app-invoice-dashboard',
  templateUrl: './invoice-dashboard.component.html',
  styleUrls: ['./invoice-dashboard.component.scss'],
})

export class InvoiceDashboardComponent {
  dataSource?: any;
  displayedColumns: string[] = [
    'employeeId',
    'employeeName',
    'employeeRole',
    // 'projectAssigned',
    'action',
  ];



  constructor(private router: Router, private api: InvoiceApiService) {

  }

  ngOnInit(): void {
    
  }

 
  applyFilterForCategory() {
   
  }

  viewInvoice(employeeId?: any, employeeName?: any) {
    console.log('viewEmployee', employeeId);
    localStorage.setItem('employeeId', employeeId);
    localStorage.setItem('employeeName', employeeName);
    this.router.navigate(['/employeeOnboarding']);
  
   
  }

  viewCreditNote(projectId: any) {
    this.api.getProjectDetails(projectId).subscribe((data) => {
      console.log('Employee Details ' + JSON.stringify(data));
  });

}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  console.log('filterValue', filterValue);
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


}
