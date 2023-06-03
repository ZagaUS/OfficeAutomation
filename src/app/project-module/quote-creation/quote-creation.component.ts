import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from 'src/app/base-api/api-services.service';

@Component({
  selector: 'app-quote-creation',
  templateUrl: './quote-creation.component.html',
  styleUrls: ['./quote-creation.component.scss']
})
export class QuoteCreationComponent {

  dateFormat = 'yyyy-MM-dd';
  quoteForm!: FormGroup;
  gstNumber?: any = [0,5,12,18,28];
  projectName?: any = localStorage.getItem('projectName');
  projectId?:any = localStorage.getItem('projectId');
  to?: any = localStorage.getItem('clientAddress');
  clientCurrency?: any = localStorage.getItem('clientCurrency');
  // date?: any = localStorage.getItem('date');
  unitPrice?: any = localStorage.getItem('unitPrice');
  date?: any = localStorage.getItem('startDate');
endDate?: any = localStorage.getItem('endDate');
duration?: any = localStorage.getItem('duration');  
// projectId?: any = localStorage.getItem('projectId');
 

constructor(private fb: FormBuilder, private api: ApiServicesService) {
  this.createForm();
}

createForm() {
  this.quoteForm = this.fb.group({
    projectId: [this.projectId],
    projectName: [this.projectName, Validators.required],
    quoteStatus: [''],
    from:[''],
    to: [this.to, Validators.required],
    serviceDescription: [''],
    clientCurrency: [this.clientCurrency, Validators.required],
    totalPrice: ['', Validators.required],
    totalAmount: ['', Validators.required],
    unitPrice: [this.unitPrice, Validators.required],
    pa: [''],
    po: [''],
    sfdc: [''],
    validDate: ['', Validators.required],
    date:[this.date, Validators.required],
    endDate:[this.endDate, Validators.required],
    totalManDays: ['', Validators.required],
    gstAmount: ['', Validators.required],
    gstPercent: ['', Validators.required],
    duration: [this.duration, Validators.required],
    employeeRole: [''],
    employeeName: [''],
  });
}

onCreate() {
  if (this.quoteForm.valid) {
  const quote = this.quoteForm.value;
  this.api.createQuotes(quote).subscribe((data: any) => {
    console.log('data updated', data);
    alert('Updated successfully');
    // do something with the response, if needed
  });
}
}

 
//   this.quoteForm.reset();
}


