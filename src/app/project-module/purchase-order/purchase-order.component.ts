import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModelPouploadComponent } from '../model-poupload/model-poupload.component';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/base-api/api-services.service';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  poId: string;
  projectName: String;
  // employeeName: String;
  // role: String;
  // projectStatus: String;
//   clientCurrency: String;
//   clientAddress: String;
}
@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent {
  ELEMENT_DATA?: any[];
  dataSource: any;
  projectId?: any = localStorage.getItem('projectId');
  pdfbaseapi?: any;
  poId?:any;
  modalRef: MdbModalRef<ModelPouploadComponent> | null = null;
  displayedColumns: string[] = [
    // 'projectId',
    'projectName',
    'poId',
    // 'employeeName',
    // 'role',
    'action',
  ];
   constructor(private router: Router, private api: ApiServicesService,private modalService: MdbModalService){

   }

   ngOnInit(): void {
    // console.log("Im'in");
    console.log("Im'in");
    this.api.getListOfPO(this.projectId).subscribe((data) => {
      console.log('List of po ' + JSON.stringify(data));
      this.dataSource = new MatTableDataSource(data);
      // this.ELEMENT_DATA = data;
    });
  }
   
  // test(projectId:any) {
  //   this.api.deletePO(projectId).subscribe((data) => {
  //   console.log('List of Project ' +JSON.stringify(data));
  // })
  //   alert('PO deleted successfully');
  //   console.log('test');
  // }
  deletePO(poId:any){
    this.api.deletePO(poId).subscribe((data) =>{
      console.log('PO deleted successfully');
    })
  }


  onUpload(){}

  openPO() {
    this.modalRef = this.modalService.open(ModelPouploadComponent, {
      modalClass: 'modal-lg',
    });
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
      // window.location.reload();
    });
  }

    // test(projectId?:any){}
    viewPO(  projectName: any,
      startDate: any,
      endDate: any){
        console.log('viewPO');
        this.poId = projectName + '_' + endDate + '_' + startDate;
      this.api.viewPO(this.poId).subscribe((data) => {
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
      // localStorage.setItem('projectId', projectId);
      // localStorage.setItem('projectName', projectName);
  
    }
}
