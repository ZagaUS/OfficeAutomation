import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InvoiceApiService } from '../base-api/invoice-api.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModaltimesheetComponent } from '../project-module/modaltimesheet/modaltimesheet.component';
import { ModalinvoiceComponent } from '../project-module/modalinvoice/modalinvoice.component';

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
  modalRef: MdbModalRef<ModaltimesheetComponent> | null = null;
  modalRefI: MdbModalRef<ModalinvoiceComponent> | null = null;
  pdfbaseapi: any;

  constructor(
    private router: Router,
    private invoiceApi: InvoiceApiService,
    private modalService: MdbModalService
  ) {}

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

  openInvoiceModal() {
    this.modalRef = this.modalService.open(ModalinvoiceComponent, {
      modalClass: 'modal-lg',
    });
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
      // window.location.reload();
    });
  }

  viewInvoice() {
    console.log('View PDF');

    // console.log('payload: ' + JSON.stringify(this.document));
    this.invoiceApi;
    // .getweeklyTimesheetfile(this.document)
    // .subscribe((data: any) => {
    // console.log('weekly pdf view clixked ' + data);
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const base64Data = dataUrl.split(',')[1];
      const binaryData = window.atob(base64Data);
      console.log(binaryData);
      this.pdfbaseapi = binaryData;
      //decode the base64 encoded string
      const binaryString = window.atob(this.pdfbaseapi);
      const byteArray = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        byteArray[i] = binaryString.charCodeAt(i);
      }
      // Create a Blob object from the Uint8Array
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      //Create a url
      const fileUrl = URL.createObjectURL(blob);
      window.open(fileUrl, '_blank');
    };
    // reader.readAsDataURL(data);
  }
  test() {
    alert('test');
    console.log('test');
  }
}
