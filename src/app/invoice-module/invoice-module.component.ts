import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InvoiceApiService } from '../base-api/invoice-api.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModaltimesheetComponent } from '../project-module/modaltimesheet/modaltimesheet.component';
import { ModalinvoiceComponent } from '../project-module/modalinvoice/modalinvoice.component';
import { ModelSendComponent } from '../project-module/model-send/model-send.component';

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
  invoiceId?:any = localStorage.getItem('invoiceId');
  documentId?:any = localStorage.getItem('documentId');

  constructor(
    private router: Router,
    private invoiceApi: InvoiceApiService,
    private modalService: MdbModalService
  ) {}

  ngOnInit(): void {
    this.invoiceApi.getAllInvoices().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      console.log('Invoice data: ' + JSON.stringify(data));
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

  viewInvoice(documentId:any) {
    console.log('View PDF', documentId);

    // console.log('payload: ' + JSON.stringify(this.document));
    // const documentId = invoiceId + '_' + date;
    // const documentId = 'DIGI_2023-04-27_30';
    console.log(documentId + ' DocumentId');
    this.invoiceApi.getPdf(documentId).subscribe((data: any) => {
      console.log('weekly pdf view clixked ' + data);
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
      reader.readAsDataURL(data);
    });
  }

  deleteInvoice(invoiceId:any) {
    console.log('deleteInvoice', invoiceId);
    this.invoiceId = localStorage.getItem('invoiceId');
    this.invoiceApi.deleteInvoice(invoiceId).subscribe((data)=>{
      console.log('List of Invoices'+JSON.stringify(data));
    })
    alert('Invoice deleted successfully');
    
  }
  onSend(){
    this.modalRef = this.modalService.open(ModelSendComponent, {
      modalClass: 'modal-lg',
    });
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
      window.location.reload();
    });
  }
  onDownload(documentId: string) {
    this.invoiceApi.downloadInvoice(documentId).subscribe(response => {
      this.saveFile(response);
    });

}
saveFile(blob: Blob) {
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'file.pdf'; // Replace with your desired file name
  link.click();
  window.URL.revokeObjectURL(link.href);
}

}
