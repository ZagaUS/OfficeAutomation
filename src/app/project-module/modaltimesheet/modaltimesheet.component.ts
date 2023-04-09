import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modaltimesheet',
  templateUrl: './modaltimesheet.component.html',
  styleUrls: ['./modaltimesheet.component.scss']
})
export class ModaltimesheetComponent {

  contactForm: FormGroup;
  durationInSeconds = 5;
  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    public modalRef: MdbModalRef<ModaltimesheetComponent>) {
    this.contactForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
      // email: ['', Validators.required],
      // message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  close(){
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }

 

  onGenerateClick() {
    console.log(this.contactForm.value);
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
    // this.apiCall.sendMail(this.contactForm.value).subscribe((data:any) => {
    //   console.log(data);
    //   this.snackBar.open("Thank you for contacting us. We will get back to you soon!", "", {
    //     duration: this.durationInSeconds * 1000});
    //   this.contactForm.reset();
    // }, (error) => {
    //   console.log(error);
    // });
    this.snackBar.open("Thank you for contacting us. We will get back to you soon!", "", {
      duration: this.durationInSeconds * 1000});
    this.contactForm.reset();
  }
}
