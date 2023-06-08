import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { InvoiceApiService } from 'src/app/base-api/invoice-api.service';
import { ModalinvoiceComponent } from 'src/app/project-module/modalinvoice/modalinvoice.component';
import { ModaltimesheetComponent } from 'src/app/project-module/modaltimesheet/modaltimesheet.component';
import { ModelSendComponent } from 'src/app/project-module/model-send/model-send.component';

export interface PeriodicElement {
  invoiceId: string;
  date: String;
  clientAddress: String;
  projectName: String;
  consultant: String;
}

@Component({
  selector: 'app-creditnote-dashboard',
  templateUrl: './creditnote-dashboard.component.html',
  styleUrls: ['./creditnote-dashboard.component.scss']
})
export class CreditnoteDashboardComponent {
  displayedColumns: string[] = [
    'invoiceId',
    'creditNoteId',
    // 'date',
    // 'clientAddress',
    'projectName',
    // 'consultant',
    'actions',
  ];
  dataSource?: any;
  modalRef: MdbModalRef<ModaltimesheetComponent> | null = null;
  modalRefI: MdbModalRef<ModalinvoiceComponent> | null = null;
  pdfbaseapi: any;
  // invoiceId?:any = localStorage.getItem('invoiceId');
  documentId?:any = localStorage.getItem('documentId');
  projectId?:any = localStorage.getItem('projectId');
  // projectName?:any = localStorage.getItem('projectName');
  creditNoteId?:any = localStorage.getItem('creditNoteId');

  constructor(
    private router: Router,
    private invoiceApi: InvoiceApiService,
    private modalService: MdbModalService
  ) {}
  ngOnInit(): void {
    localStorage.setItem('projectId',this.projectId);
    // localStorage.setItem('projectName',this.projectName);
   this.invoiceApi.getAllCreditNote(this.projectId).subscribe((data) => {
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
    // this.modalRef = this.modalService.open(ModalinvoiceComponent, {
    //   modalClass: 'modal-lg',
    // });
    // this.modalRef.onClose.subscribe((message: any) => {
    //   console.log(message);
    // localStorage.setItem('projectName', this.projectName);
    localStorage.setItem('projectId', this.projectId);  
    this.router.navigate(['/invoicedashboard/creditNote']);
      // window.location.reload();
    // });
  }

  viewCreditNote(creditNoteId: any) {
    creditNoteId= localStorage.setItem(creditNoteId,'creditNoteId');
    console.log('View PDF', creditNoteId);

    // console.log('payload: ' + JSON.stringify(this.document));
    // const documentId = invoiceId + '_' + date;
    // const documentId = 'DIGI_2023-04-27_30';
    console.log(creditNoteId + 'creditNoteId');
    this.invoiceApi.getPdfCreditNote(creditNoteId).subscribe((data: any) => {
      console.log('view credit note pdf ' + data);
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

  deleteCreditNotes(creditNoteId:any) {
    console.log('deleteInvoice', creditNoteId);
    // this.invoiceId = localStorage.getItem('invoiceId');
    this.invoiceApi.deleteCreditNotes(creditNoteId).subscribe((data)=>{
      console.log('List of credit note'+JSON.stringify(data));
    })
    alert('credit note deleted successfully');
    
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
  onDownload(creditNoteId: string) {
    this.invoiceApi.downloadCreditNote(creditNoteId).subscribe(response => {
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
