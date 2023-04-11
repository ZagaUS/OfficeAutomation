import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  invoiceId: string;
  projectName: String;
  date: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    invoiceId: '1',
    projectName: 'Citi',
    date: 'Approved',
  },
  {
    invoiceId: '2',
    projectName: 'Citi',
    date: '',
  },
  {
    invoiceId: '3',
    projectName: 'Citi',
    date: '',
  },
  {
    invoiceId: '4 ',
    projectName: 'Citi',
    date: '',
  },
];

@Component({
  selector: 'app-invoice-module',
  templateUrl: './invoice-module.component.html',
  styleUrls: ['./invoice-module.component.scss'],
})
export class InvoiceModuleComponent {
  displayedColumns: string[] = ['invoiceId', 'projectName', 'date', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private router: Router) {}

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
