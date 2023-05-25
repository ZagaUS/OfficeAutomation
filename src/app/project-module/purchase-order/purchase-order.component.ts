import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModelPouploadComponent } from '../model-poupload/model-poupload.component';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/base-api/api-services.service';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  projectId: string;
  projectName: String;
  employeeName: String;
  role: String;
  projectStatus: String;
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
  modalRef: MdbModalRef<ModelPouploadComponent> | null = null;
  displayedColumns: string[] = [
    'projectId',
    'projectName',
    'poId',
    // 'role',
    'action',
  ];
   constructor(private router: Router, private api: ApiServicesService,private modalService: MdbModalService){

   }

   ngOnInit(): void {
    // console.log("Im'in");
    // // console.log("Im'in");
    // this.api.getListOfPO().subscribe((data) => {
    //   console.log('List of projects ' + JSON.stringify(data));
    //   this.dataSource = new MatTableDataSource(data);
    //   // this.ELEMENT_DATA = data;
    // });
  }
   viewProject(projectId?: any, projectName?: any) {
    console.log('viewProject', projectId);
    localStorage.setItem('projectId', projectId);
    localStorage.setItem('projectName', projectName);


    this.router.navigate(['/projectModule']);
  }
  test(projectId:any) {
    this.api.deleteProjectById(projectId).subscribe((data) => {
    console.log('List of Project ' +JSON.stringify(data));
  })
    alert('List of project deleted successfully');
    console.log('test');
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
    viewPO(){}
}
