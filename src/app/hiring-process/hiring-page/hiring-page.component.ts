import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hiring-page',
  templateUrl: './hiring-page.component.html',
  styleUrls: ['./hiring-page.component.scss'],
})
export class HiringPageComponent {
  constructor(private route: Router) {}

  candidateName: string = '';
  emailId: string = '';
  designation: string = '';
  experience: string = '';
  appliedDate: Date | null = null;
  file: File | null = null;

  onFileInput(files: FileList | null) {
    if (files && files.length > 0) {
      this.file = files.item(0);
    }
  }

  onSubmit() {
    console.log('Form submitted!');
    const localDate = this.appliedDate
      ? this.appliedDate.toLocaleDateString()
      : null;
    const formData = {
      candidateName: this.candidateName,
      emailId: this.emailId,
      designation: this.designation,
      experience: this.experience,
      appliedDate: localDate,
      file: this.file,
    };
    console.log('Form Data:', formData);
    // alert("updated successfully");
  }

}
