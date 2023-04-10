import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modaldailyweek',
  templateUrl: './modaldailyweek.component.html',
  styleUrls: ['./modaldailyweek.component.scss'],
})
export class ModaldailyweekComponent {
  contactForm: FormGroup;
  @ViewChild('fileInput') fileInput?: ElementRef;
  constructor(
    private router: Router,
    public modalRef: MdbModalRef<ModaldailyweekComponent>,
    public fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      fileName: ['', Validators.required],
      uploadfile: ['', Validators.required],
      hours: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
    });
  }
  showDaily = false;
  showExternal = false;
  projectName?: string;
  duration?: string;
  description?: string;
  date?: string;
  fileName: any = 'dummy';
  // hours?: string;
  // upload?: any;
  // startDate?: string;
  // endDate?: string;
  // selectedFile?: any;

  onFileSelected(event: any) {
    const files = event.target.files[0];
    console.log(files.name);
    this.fileName = files.name;
    if (files.length > 0) {
      this.contactForm.patchValue({
        uploadfile: files,
      });
    }
  }

  openFileSelection() {
    this.fileInput?.nativeElement.click();
  }

  close() {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }

  onClickDailySave() {
    const data = {
      projectName: this.projectName,
      duration: this.duration,
      description: this.description,
      date: this.date,
    };
    console.log(data);
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }
  onClickDaily() {
    this.showDaily = true;
    this.showExternal = false;
  }
  // onClickExternalSave() {
  //   const exdata = {
  //     upload: this.upload,
  //     hours: this.hours,
  //     startDate: this.startDate,
  //     endDate: this.endDate,
  //   };
  //   console.log(exdata);
  //   const closeMessage = 'Modal closed';
  //   this.modalRef.close(closeMessage);
  // }
  onClickExternalSave() {
    // const formData = new FormData();
    // formData.append('uploadfile', this.contactForm.get('uploadfile')?.value);
    // formData.append('hours', this.contactForm.get('hours')?.value);
    // formData.append('startDate', this.contactForm.get('startDate')?.value);
    // formData.append('endDate', this.contactForm.get('endDate')?.value);
    // Make a HTTP request to upload the file using the formData
    this.contactForm.get('fileName')?.setValue(this.fileName);
    console.log(this.contactForm.value);
  }
  onClickExternal() {
    this.showDaily = false;
    this.showExternal = true;
  }
}
