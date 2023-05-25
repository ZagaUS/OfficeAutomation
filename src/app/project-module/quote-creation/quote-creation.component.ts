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
  gstNumber?: any = [0,5,12,18,28];
  projectName?: any = localStorage.getItem('projectName');
  projectId?:any = localStorage.getItem('projectId');
  to?: any = localStorage.getItem('clientAddress');
  clientCurrency?: any = localStorage.getItem('clientCurrency');
  unitPrice?: any = localStorage.getItem('unitPrice');
  startDate?: any = localStorage.getItem('startDate');
endDate?: any = localStorage.getItem('endDate');
duration?: any = localStorage.getItem('duration');  
 

constructor(private fb: FormBuilder, private api: ApiServicesService) {
  this.createForm();
}

createForm() {
  this.quoteForm = this.fb.group({
    projectId: [this.projectId],
    projectName: [this.projectName],
    quoteStatus: [''],
    from:[''],
    to: [this.to],
    serviceDescription: [''],
    clientCurrency: [this.clientCurrency],
    totalPrice: [''],
    totalAmount: [''],
    unitPrice: [this.unitPrice],
    pa: [''],
    po: [''],
    sfdc: [''],
    validDate: [''],
    startDate:[this.startDate],
    endDate:[this.endDate],
    totalManDays: [''],
    gstAmount: [''],
    gstPercent: [''],
    duration: [this.duration],
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

