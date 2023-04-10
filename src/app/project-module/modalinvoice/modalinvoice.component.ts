import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modalinvoice',
  templateUrl: './modalinvoice.component.html',
  styleUrls: ['./modalinvoice.component.scss'],
})
export class ModalinvoiceComponent {
  @ViewChild(MatRadioGroup) radioGroup?: MatRadioGroup;
  categories: string[] = ['Approved'];
  contactForm: FormGroup;
  durationInSeconds = 5;
  dateFormat = 'yyyy-MM-dd';
  startDate?: any = new Date();
  endDate?: any = new Date();
  
  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    public modalRef: MdbModalRef<ModalinvoiceComponent>
  ) {
    this.contactForm = this.fb.group({
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      projectName: ['', Validators.required],
      // message: ['', Validators.required]
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
    this.contactForm.get("startDate")?.setValue(startDate);
    this.contactForm.get("endDate")?.setValue(endDate);
    console.log('Start date: ' + startDate, 'end date: ' + endDate);
    console.log(this.contactForm.value);
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

  applyFilterForCategory() {
    const selectedValue = this.radioGroup?.value;
    if (selectedValue === 'All') {
      // this.dataSource.filter = ''; // clear filter
      console.log('approved');
    } else {
      console.log('applyFilterForCategory' + this.radioGroup?.value);
      // this.dataSource.filter = selectedValue;
    }
  }
}
