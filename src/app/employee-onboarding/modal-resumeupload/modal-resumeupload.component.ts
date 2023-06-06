import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiServicesService } from 'src/app/base-api/api-services.service';
import { EmployeeApiService } from 'src/app/base-api/employee-api.service';

@Component({
  selector: 'app-modal-resumeupload',
  templateUrl: './modal-resumeupload.component.html',
  styleUrls: ['./modal-resumeupload.component.scss']
})
export class ModalResumeuploadComponent {
  contactForm: FormGroup;
  @ViewChild('fileInput') fileInput?: ElementRef;

  constructor(
    private router: Router,
    public modalRef: MdbModalRef<ModalResumeuploadComponent>,
    private api: EmployeeApiService,
    public fb: FormBuilder
  ){
    this.contactForm = this.fb.group({
      fileName: ['', Validators.required],
      uploadfile: ['', Validators.required],
      // hours: ['', Validators.required],
      // startDate: [new Date(), Validators.required],
      // endDate: [new Date(), Validators.required],
    });
  }

// dateFormat = 'yyyy-MM-dd';
fileName: any = '';

name?: any = localStorage.getItem('employeeName');
employeeId?: any = localStorage.getItem('employeeId');

onFileSelected(event: any) {
  const files: File = event.target.files[0];
  // console.log(files.name);
  this.fileName = files.name;
  const fileInputElement = event.target;
  fileInputElement.value = '';
  this.contactForm.get('uploadfile')?.setValue(files);
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
  // const startDate = formatDate(
  //   this.contactForm.value.startDate,
  //   this.dateFormat,
  //   'en-US'
  // );
  // const endDate = formatDate(
  //   this.contactForm.value.endDate,
  //   this.dateFormat,
  //   'en-US'
  // );
  // const docType = 'EXTERNAL';
  // this.contactForm.get('endDate')?.setValue(endDate);
  // this.contactForm.get('startDate')?.setValue(startDate);
  // const projectName = localStorage.getItem('projectName');
  // const projectId = localStorage.getItem('projectId');
  // const poId = localStorage.getItem('poId');
  // const employeeName = localStorage.getItem('employeeName')

  this.api.upload(
      this.contactForm.value,
      this.employeeId,
      this.name).subscribe((data:any) => {
      console.log('External Timesheet of projects ' + JSON.stringify(data));
      // window.location.reload();
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
