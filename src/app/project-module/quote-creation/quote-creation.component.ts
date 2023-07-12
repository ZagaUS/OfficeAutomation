import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from 'src/app/base-api/api-services.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-quote-creation',
  templateUrl: './quote-creation.component.html',
  styleUrls: ['./quote-creation.component.scss']
})
export class QuoteCreationComponent {

  dateFormat = 'yyyy-MM-dd';
  quoteForm!: FormGroup;
  // gstNumber?: any = [0,5,12,18,28];
  projectName?: any = localStorage.getItem('projectName');
  projectId?:any = localStorage.getItem('projectId');
  to?: any = localStorage.getItem('clientAddress');
  clientCurrency?: any = localStorage.getItem('clientCurrency');
  // date?: any = localStorage.getItem('date');
  unitPrice?: any = localStorage.getItem('unitPrice');
  date?: any = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  startDate?: any = localStorage.getItem('startDate');;
endDate?: any = localStorage.getItem('endDate');
// validDate?: any = localStorage.getItem('validDate');

// duration?: any = localStorage.getItem('duration');  
// projectId?: any = localStorage.getItem('projectId');
 

constructor(private fb: FormBuilder, private api: ApiServicesService, private location: Location) {
  this.createForm();
}

// ngOnInit() {
//   this.startDate = localStorage.getItem('startDate');
// this.endDate = localStorage.getItem('endDate');
// }

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
    validDate: [new Date(), Validators.required],
    date: [new Date(), Validators.required],
    startDate:[this.startDate, Validators.required],
    endDate:[this.endDate, Validators.required],
    totalManDays: ['', Validators.required],
    whtAmount: ['', Validators.required],
    // gstPercent: ['', Validators.required],
    // duration: [this.duration, Validators.required],
    employeeRole: [''],
    employeeName: [''],
  });
}

onCreate() {
  if (this.quoteForm.valid) {
    const validDate = formatDate(this.quoteForm.value.validDate,
      this.dateFormat,
      'en-US');
      const date = formatDate(this.quoteForm.value.date,
        this.dateFormat,
        'en-US');

  const quote = {...this.quoteForm.value,validDate: validDate, date:date};
  this.api.createQuotes(quote).subscribe((data: any) => {
    console.log('data updated', data);
    console.log(this.startDate);
    alert('Updated successfully');
    this.location.back();
    // do something with the response, if needed
  });
}
}

 
//   this.quoteForm.reset();
}


