import { formatDate } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiServicesService } from 'src/app/base-api/api-services.service';

@Component({
  selector: 'app-model-send',
  templateUrl: './model-send.component.html',
  styleUrls: ['./model-send.component.scss']
})
export class ModelSendComponent {

  contactForm: FormGroup;
  @ViewChild('fileInput') fileInput?: ElementRef;
// from:any = localStorage.getItem('from');
// subject:any = localStorage.getItem('subject');
// to = '@gmail.com';
// from = '@gmail.com';
// subject : any = localStorage.getItem('subject');
// description:any = localStorage.getItem('description');

dateFormat = 'yyyy-MM-dd';
fileName: any = '';


constructor(
 private router: Router,
 public modalRef: MdbModalRef<ModelSendComponent>,
 private api: ApiServicesService,
 public fb: FormBuilder
){
 this.contactForm = this.fb.group({
   fileName: ['', Validators.required],
   uploadfile: ['', Validators.required],

   // hours: ['', Validators.required],
  //  startDate: [new Date(), Validators.required],
  //  endDate: [new Date(), Validators.required],
  from:['', Validators.required],
to:['', Validators.required],
subject:['', Validators.required],
description: ['', Validators.required],
 });
}

projectName?: any = localStorage.getItem('projectName');
projectId?: any = localStorage.getItem('projectId');

onFileSelected(event: any) {
 const files: File = event.target.files[0];
 // console.log(files.name);
 this.fileName = files.name;
 console.log(files.name);
 this.contactForm.get('fileName')?.setValue(files.name);
 const fileInputElement = event.target;
 fileInputElement.value = '';
 this.contactForm.get('uploadfile')?.setValue(files);
}

onSend(){
        this.api.sendDocument(this.contactForm.value).subscribe((data) => {
      console.log('External Timesheet of projects ' + JSON.stringify(data));
      window.location.reload();
    });
}

openFileSelection() {
 this.fileInput?.nativeElement.click();
}


close() {
 const closeMessage = 'Modal closed';
 this.modalRef.close(closeMessage);
}
onClickExternal(){}

onClickExternalSave() {
 const startDate = formatDate(
   this.contactForm.value.startDate,
   this.dateFormat,
   'en-US'
 );
 const endDate = formatDate(
   this.contactForm.value.endDate,
   this.dateFormat,
   'en-US'
 );
 // const docType = 'EXTERNAL';
 this.contactForm.get('endDate')?.setValue(endDate);
 this.contactForm.get('startDate')?.setValue(startDate);
 // const projectName = localStorage.getItem('projectName');
 // const projectId = localStorage.getItem('projectId');
 // const poId = localStorage.getItem('poId');
 // const employeeName = localStorage.getItem('employeeName')

 this.api.uploadPO(
     this.contactForm.value,
     this.projectId,
     this.projectName).subscribe((data) => {
     console.log('External Timesheet of projects ' + JSON.stringify(data));
     window.location.reload();
   });

 console.log(this.contactForm.value);

 const closeMessage = 'Modal closed';
 this.modalRef.close(closeMessage);
}
onSubmit() {
 // const po = this.contactForm.value;
 // this.api.createProjectDetails(projectDetails).subscribe((data: any) => {
 //   console.log('data updated', data);
 //   alert('Updated successfully');
 //   // do something with the response, if needed
 // });
}
// onGenerateClick(){}
onClickDaily(){}


}
