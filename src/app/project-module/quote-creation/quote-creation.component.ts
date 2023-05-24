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
  gstNumber?: any = [24,18,1];
  projectName?: any = localStorage.getItem('projectName');
  to?: any = localStorage.getItem('clientAddress');
  clientCurrency?: any = localStorage.getItem('clientCurrency');
 

constructor(private fb: FormBuilder, private api: ApiServicesService) {
  this.createForm();
}

createForm() {
  this.quoteForm = this.fb.group({
    projectId: [''],
    projectName: [this.projectName],
    quoteStatus: [''],
    from:[''],
    to: [this.to],
    serviceDescription: [''],
    clientCurrency: [this.clientCurrency],
    totalPrice: [''],
    totalAmount: [''],
    unitPrice: [''],
    pa: [''],
    po: [''],
    sfdc: [''],
    validDate: [''],
    totalManDays: [''],
    gstAmount: [''],
    gstPercent: [''],
    duration: [''],
    date: [''],
    employeeRole: [''],
    employeeName: [''],
  });
}

onCreate() {
  const quote = this.quoteForm.value;
  this.api.createQuotes(quote).subscribe((data: any) => {
    console.log('data updated', data);
    alert('Updated successfully');
    // do something with the response, if needed
  });
}
}

