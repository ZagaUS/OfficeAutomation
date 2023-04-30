import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
 
    myForm!: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.createForm();
    }
  
    createForm() {
      this.myForm = this.fb.group({
        clientName: ['', Validators.required],
        clientEmail: ['', Validators.required],
        clientAddress: [''],
        clientCountry: ['', Validators.required],
        clientCurrency: ['', Validators.required],
        clientTimezone: ['', Validators.required],
        employeeName: ['', Validators.required],
        employeeId: ['', Validators.required],
        employeeEmail: ['', Validators.required],
        employeeNumber: ['', Validators.required],
        employeeRole: ['', Validators.required],
        projectName: ['', Validators.required],
        projectId: ['', Validators.required],
        projectType: ['', Validators.required],
        projectManager: ['', Validators.required],
        projectAssignmentStatus: [false],
        quoteID: ['', Validators.required],
        quoteStatus: ['', Validators.required],
        serviceDescription: [''],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        from: ['', Validators.required],
        to: ['', Validators.required],
        totalAmount: ['', Validators.required],
        unitPrice: ['',Validators.required],
        PA:['', Validators.required],
        PO:['', Validators.required],
        sfdc:['', Validators.required],
        validDate: ['', Validators.required],
        quantity: ['', Validators.required],
        duration: ['', Validators.required],
        date: ['', Validators.required],
      });
    }
  
    onSubmit() {
      console.log(this.myForm.value);
    }
  }
  