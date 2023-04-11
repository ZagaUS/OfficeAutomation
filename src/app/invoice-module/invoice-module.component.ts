import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InvoiceApiService } from '../base-api/invoice-api.service';

export interface PeriodicElement {
  invoiceId: string;
  date: String;
  clientAddress: String;
  projectName: String;
  consultant: String;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     invoiceId: '1',
//     projectName: 'Citi',
//     date: 'Approved',
//   },
//   {
//     invoiceId: '2',
//     projectName: 'Citi',
//     date: '',
//   },
//   {
//     invoiceId: '3',
//     projectName: 'Citi',
//     date: '',
//   },
//   {
//     invoiceId: '4 ',
//     projectName: 'Citi',
//     date: '',
//   },
// ];

@Component({
  selector: 'app-invoice-module',
  templateUrl: './invoice-module.component.html',
  styleUrls: ['./invoice-module.component.scss'],
})
export class InvoiceModuleComponent {
  displayedColumns: string[] = [
    'invoiceId',
    'date',
    'clientAddress',
    'projectName',
    'consultant',
    'actions',
  ];
  dataSource?: any;

  constructor(private router: Router, private invoiceApi: InvoiceApiService) {}

  ngOnInit(): void {
    this.invoiceApi.getAllInvoices().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('filterValue', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewInvoice() {}
  test() {
    alert('test');
    console.log('test');
  }
}
