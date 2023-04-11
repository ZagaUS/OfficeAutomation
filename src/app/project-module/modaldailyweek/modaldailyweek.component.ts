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
  
  dailyData: any;
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
  projectName?: string;
  duration?: string;
  description?: string;
  date?: string;
  supportTicket?: string;
  clientOwner?: string;
  redhatOwner?: string;
  clientOwners: string[] = [];

  mapClientOwners() {
    
  }

  mapRedhatOwners(){
    
  }
  
  redHatOwners: string[] = [];
  projectId?: any = localStorage.getItem('projectId');
  timesheetType?: string = "Daily"
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
    this.clientOwner?.split(',').map((item) => {
      console.log("client " + item);
      this.clientOwners.push(item);
    }) 

    this.redhatOwner?.split(',').map((item) => {
      console.log("redhat " + item);
      this.redHatOwners.push(item);
    })

    const dts = {
      projectId: this.projectId,
      projectName: this.projectName,
      duration: this.duration,
      date: this.date,
      supportTicket: this.supportTicket,      
      clientOwners:  this.clientOwners,
      redHatOwners: this.redHatOwners,
      description: this.description,
      timesheetType: this.timesheetType,
    };
    console.log(dts);

    this.api.createDailyTimesheet(dts).subscribe((data) => {
      console.log('List of projects ' + JSON.stringify(data));
    });


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
1  }
  onClickExternal() {
    this.showDaily = false;
    this.showExternal = true;
  }
}
