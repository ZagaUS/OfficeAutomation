import { formatDate } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiServicesService } from 'src/app/base-api/api-services.service';

@Component({
  selector: 'app-modaldailyweek',
  templateUrl: './modaldailyweek.component.html',
  styleUrls: ['./modaldailyweek.component.scss'],
})
export class ModaldailyweekComponent {
  contactForm: FormGroup;
  @ViewChild('fileInput') fileInput?: ElementRef;

  dateFormat = 'yyyy-MM-dd';
  constructor(
    private router: Router,
    public modalRef: MdbModalRef<ModaldailyweekComponent>,
    private api: ApiServicesService,
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
  projectName?: any = localStorage.getItem('projectName');
  duration?: string;
  description?: string;
  date?: string;
  supportTicket?: string;
  clientOwner?: string;
  redhatOwner?: string;
  clientOwners: string[] = [];
  redHatOwners: string[] = [];
  projectId?: any = localStorage.getItem('projectId');
  timesheetType?: string = 'Daily';
  fileName: any = 'dummy';
  onFileSelected(event: any) {
    const files: File = event.target.files[0];
    // console.log(files.name);
    this.fileName = files.name;
    const fileInputElement = event.target;
    fileInputElement.value = '';
    this.contactForm.get('uploadfile')?.setValue(files);
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.contactForm.get('uploadfile')?.setValue(reader.result);
    // };
    // reader.readAsDataURL(files);
    // if (files.length > 0) {
    //   this.contactForm.patchValue({
    //     uploadfile: files,
    //   });
    // }
  }

  openFileSelection() {
    this.fileInput?.nativeElement.click();
  }

  close() {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }

  onClickDailySave() {
    this.clientOwner?.split(',').map((item) => {
      console.log('client ' + item);
      this.clientOwners.push(item);
    });

    this.redhatOwner?.split(',').map((item) => {
      console.log('redhat ' + item);
      this.redHatOwners.push(item);
    });

    const dts = {
      projectId: this.projectId,
      projectName: this.projectName,
      hours: this.duration,
      date: this.date,
      supportTicket: this.supportTicket,
      clientOwners: this.clientOwners,
      redHatOwners: this.redHatOwners,
      description: this.description,
      timesheetType: this.timesheetType,
    };
    console.log(dts);

    this.api.createDailyTimesheet(dts).subscribe((data) => {
      console.log('Create Timesheet ' + JSON.stringify(data));
      window.location.reload();
    });

    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }
  onClickDaily() {
    this.showDaily = true;
    this.showExternal = false;
  }
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
    const docType = 'EXTERNAL';
    this.contactForm.get('endDate')?.setValue(endDate);
    this.contactForm.get('startDate')?.setValue(startDate);
    const projectName = localStorage.getItem('projectName');

    this.api
      .createExternalTimesheet(
        this.contactForm.value,
        this.projectId,
        projectName,
        docType
      )
      .subscribe((data) => {
        console.log('External Timesheet of projects ' + JSON.stringify(data));
        window.location.reload();
      });

    console.log(this.contactForm.value);

    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }
  onClickExternal() {
    this.showDaily = false;
    this.showExternal = true;
  }
}
