import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { formatDate } from '@angular/common';
import { ApiServicesService } from 'src/app/base-api/api-services.service';

@Component({
  selector: 'app-modaltimesheet',
  templateUrl: './modaltimesheet.component.html',
  styleUrls: ['./modaltimesheet.component.scss'],
})
export class ModaltimesheetComponent {
  contactForm: FormGroup;
  durationInSeconds = 5;
  dateFormat = 'yyyy-MM-dd';
  startDate?: any = new Date();
  endDate?: any = new Date();

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private api: ApiServicesService,
    public modalRef: MdbModalRef<ModaltimesheetComponent>
  ) {
    this.contactForm = this.fb.group({
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
    });
  }

  ngOnInit(): void {}

  close() {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }

  onGenerateClick() {
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
    const generateWeekly = {
      projectId: localStorage.getItem('projectId'),
      projectName: localStorage.getItem('projectName'),
      startDate: startDate,
      endDate: endDate,
    };
    console.log('Start date: ' + startDate, 'end date: ' + endDate);
    this.api.createWeeklyTimesheetbyDate(generateWeekly).subscribe((data) => {
      console.log('Data: ' + JSON.stringify(data));
      window.location.reload();
    });
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
    this.snackBar.open(
      'Thank you for contacting us. We will get back to you soon!',
      '',
      {
        duration: this.durationInSeconds * 1000,
      }
    );
    this.contactForm.reset();
  }
}
