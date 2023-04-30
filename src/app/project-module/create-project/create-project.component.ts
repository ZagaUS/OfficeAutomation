import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from 'src/app/base-api/api-services.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiServicesService) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      clientEmail: [''],
      clientName: [''],
      clientAddress: [''],
      clientCountry: [''],
      clientCurrency: [''],
      clientTimezone: [''],
      employeeName: [''],
      employeeId: [''],
      employeeEmail: [''],
      employeeNumber: [''],
      employeeRole: [''],
      projectName: [''],
      projectId: [''],
      projectManager: [''],
      projectAssignmentStatus: [''],
      quoteId: [''],
      quoteStatus: [''],
      serviceDescription: [''],
      startDate: [''],
      endDate: [''],
      from: [''],
      to: [''],
      totalAmount: [''],
      unitPrice: [''],
      pa: [''],
      po: [''],
      sfdc: [''],
      validDate: [''],
      totalManDays: [''],
      duration: [''],
      date: [''],
    });
  }

  onSubmit() {
    const projectDetails = this.myForm.value;
    this.api.createProjectDetails(projectDetails).subscribe((data: any) => {
      console.log('data updated', data);
      alert('Updated successfully');
      // do something with the response, if needed
    });
  }
}
