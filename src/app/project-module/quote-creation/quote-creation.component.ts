import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from 'src/app/base-api/api-services.service';

@Component({
  selector: 'app-quote-creation',
  templateUrl: './quote-creation.component.html',
  styleUrls: ['./quote-creation.component.scss']
})
export class QuoteCreationComponent {
  quoteForm!: FormGroup;

constructor(private fb: FormBuilder, private api: ApiServicesService) {
  this.createForm();
}

createForm() {
  this.quoteForm = this.fb.group({
    projectName: [''],
    to: [''],
    totalAmount: [''],
    unitPrice: [''],
    pa: [''],
    po: [''],
    sfdc: [''],
    validDate: [''],
    totalManDays: [''],
    // duration: [''],
    // date: [''],
  });
}

onCreate() {
  const quoteDetails = this.quoteForm.value;
  this.api.createProjectDetails(quoteDetails).subscribe((data: any) => {
    console.log('data updated', data);
    alert('Updated successfully');
    // do something with the response, if needed
  });
}
}

