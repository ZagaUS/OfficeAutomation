import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/base-api/api-services.service';
import { MatTableDataSource } from '@angular/material/table';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MatRadioGroup } from '@angular/material/radio';
import { ModelSendComponent } from '../model-send/model-send.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  @ViewChild(MatRadioGroup) radioGroup?: MatRadioGroup;
  categories: string[] = ['Quote PDFs', 'Quotes'];
  dataSource?: any;
  pdfbaseapi?: any;
  quoteId?: any ;
  projectId?: any = localStorage.getItem("projectId");
  pdfStatus?:any = localStorage.getItem("pdfStatus");
  modalRef: MdbModalRef<ModelSendComponent> | null = null;
  displayedColumns: string[] = [
    'projectName',
    'quoteNumber',
    'validDate',
    'totalManDays',
    'totalAmount',
    'action',
  ];

  constructor(private http: HttpClient, private router: Router, private apiService: ApiServicesService, private modalService: MdbModalService){

  }

  ngOnInit(): void {
    console.log('im in');
    this.apiService.getQuotePdf(this.projectId).subscribe((data) => {
      console.log('List of Quote ' + JSON.stringify(data));
      this.dataSource = new MatTableDataSource(data);
    });
    
  }
  


  applyFilterForCategory() {
    const selectedValue = this.radioGroup?.value;
     if (selectedValue === 'Quote PDFs') {
      // this.dataSource.filter = ''; // clear filter
      this.pdfStatus = true;
      this.apiService
        .getQuotePdf (this.projectId)
        .subscribe((data) => {
          console.log('External data' + data);
          this.dataSource = new MatTableDataSource(data);

        });
        

      }
      else if (selectedValue === 'Quotes') {
           
      // this.dataSource.filter = ''; // clear filter
      this.pdfStatus = false;
      this.apiService
        .getAllQuotes(this.projectId)
        .subscribe((data) => {
          console.log('External data' + data);
          this.dataSource = new MatTableDataSource(data);
        });

        }}
  


  // viewQuote(quoteName?: any) {
  //   console.log('viewQuote',quoteName);
  //   // localStorage.setItem('projectId', projectId);
  //   localStorage.setItem('quoteName', quoteName);
  //   // this.router.navigate(['/projectModule']);
  // }
onCreate(){}

onDeletePdf(quoteId?:any){
  this.apiService.deleteQuote(quoteId).subscribe((data) => {
    console.log('List of Quote'+ JSON.stringify(data));
    })

    alert('successfully deleted the quote')
    console.log('validating the delete alert box');
    window.location.reload();
}

onDelete(quoteId?: any){
  this.apiService.deleteQuoteById(quoteId).subscribe((data) => {
    console.log('List of Quote'+ JSON.stringify(data));
    })

    alert('successfully deleted the quote')
    console.log('validating the delete alert box');
    window.location.reload();
}
viewQuote( quoteId?: any){

  // localStorage.setItem('quoteId', quoteId);
    console.log('viewPO');
    // this.quoId = projectName + '_' + endDate + '_' + startDate;
  this.apiService.viewQuote(quoteId).subscribe((data) => {
  // console.log('viewPO', poId);
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

onSend(){
  this.modalRef = this.modalService.open(ModelSendComponent, {
    modalClass: 'modal-lg',
  });
  this.modalRef.onClose.subscribe((message: any) => {
    console.log(message);
    window.location.reload();
  });
}

onDownload(quoteId: string) {
    this.apiService.downloadQuote(quoteId).subscribe(response => {
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




view(quoteId?: any){
  console.log('view the quote',quoteId);
   localStorage.setItem('quoteId', quoteId);

   this.router.navigate(['/viewQuote'])
}

}

