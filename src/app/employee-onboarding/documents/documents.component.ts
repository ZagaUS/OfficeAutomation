import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { EmployeeApiService } from 'src/app/base-api/employee-api.service';
import { ModalResumeuploadComponent } from '../modal-resumeupload/modal-resumeupload.component';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})

export class DocumentsComponent {
  fileName: any;
  file: any;
  pdfbaseapi: any;
  employeeId: any = "128"
  
  constructor(private fb: FormBuilder, private api: EmployeeApiService) {

  }

  ngOnInit(): void {
    // this.employeeId = localStorage.getItem('employeeId');
    // this.api.downloadPDF(this.employeeId).subscribe((res: any) => {
    //   console.log(res);
    //   this.file = res;
    }
  

  viewPdf(){
    
     
      this.api.downloadPDF(this.employeeId).subscribe((res: any) => {
        console.log(res);
        this.file = res;

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
        reader.readAsDataURL(res);
      });
      

  }

  
}
