import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-model-poupload',
  templateUrl: './model-poupload.component.html',
  styleUrls: ['./model-poupload.component.scss']
})
export class ModelPouploadComponent {
  fileName: any;

  constructor(public modalRef: MdbModalRef<ModelPouploadComponent>){

  }

  onFileSelected(event: any) {
    const files: File = event.target.files[0];
    // console.log(files.name);
    this.fileName = files.name;
    const fileInputElement = event.target;
    fileInputElement.value = '';
    // this.contactForm.get('uploadfile')?.setValue(files);
  }

  close() {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }

}
