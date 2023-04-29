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
    console.log('Candidate Name:', this.candidateName);
    console.log('Email ID:', this.emailId);
    console.log('Designation:', this.designation);
    console.log('Experience:', this.experience);
    console.log('Applied Date:', this.appliedDate);
    console.log('File:', this.file);
  } // TODO: submit form data to server

  showProcesses() {
    this.route.navigate(['pamProcess']);
  }
}
