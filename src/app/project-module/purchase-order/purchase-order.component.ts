import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModelPouploadComponent } from '../model-poupload/model-poupload.component';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent {

  dataSource: any;
  modalRef: MdbModalRef<ModelPouploadComponent> | null = null;

   constructor(private modalService: MdbModalService){

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

}
