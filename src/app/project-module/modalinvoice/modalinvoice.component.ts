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
  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    public modalRef: MdbModalRef<ModalinvoiceComponent>
  ) {
    this.contactForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
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
    console.log(this.contactForm.value);
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
    // this.apiCall.sendMail(this.contactForm.value).subscribe((data:any) => {
    //   console.log(data);
    //   this.snackBar.open("Thank you for contacting us. We will get back to you soon!", "", {
    //     duration: this.durationInSeconds * 1000});
    //   this.contactForm.reset();
    // }, (error) => {
    //   console.log(error);
    // });
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
