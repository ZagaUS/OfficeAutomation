import { Component,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvoiceApiService } from 'src/app/base-api/invoice-api.service';
import { Location} from '@angular/common';



@Component({
  selector: 'app-credit-note',
  templateUrl: './credit-note.component.html',
  styleUrls: ['./credit-note.component.scss']
})

export class CreditNoteComponent {

 
  creditnoteForm!: FormGroup;


 
  projectName?: any = localStorage.getItem('projectName');
  projectId?:any = localStorage.getItem('projectId');
  clientCurrency?: any = localStorage.getItem('clientCurrency');
  clientAddress?: any = localStorage.getItem('clientAddress');
  // invoiceId?:any = localStorage.getItem('invoiceId');
  po?: any = localStorage.getItem('po');
  sfdc?:  any = localStorage.getItem('sfdc');
  pa?:  any = localStorage.getItem('pa');
  totalManDays?:  any = localStorage.getItem('totalManDays');

  constructor( private fb: FormBuilder,   private api: InvoiceApiService, private location : Location){
    this.createForm();
    
  }

    createForm() {
    this.creditnoteForm = this.fb.group({
      creditNoteId:['', Validators.required],
      invoiceId:['', Validators.required],
      projectId: [this.projectId],
      projectName: [this.projectName],
      clientAddress: [this.clientAddress],
      ref: [''],
      referenceInvoice:[''],
      pa: [this.pa],
      po: [this.po],
      sfdc: [this.sfdc],
      currencyType: [this.clientCurrency, Validators.required],
      date: ['', Validators.required],
      paidAmount:['', Validators.required],
      actualsgd:['', Validators.required],
      creditAmount: ['', Validators.required],
      actualAmount: ['', Validators.required],
    });
  }

  onCreate() {
    if (this.creditnoteForm.invalid) {
      alert('Please fill in all required fields.');
      return;
    }
    
    const quote = this.creditnoteForm.value;
    console.log(quote);
    this.api.createCreditNote(quote).subscribe((data: any) => {
      console.log('data updated', data);
      alert('Updated successfully');
      this.location.back();
    });
  }
  }

