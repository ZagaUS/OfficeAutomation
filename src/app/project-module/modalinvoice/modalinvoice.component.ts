import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiServicesService } from 'src/app/base-api/api-services.service';

@Component({
  selector: 'app-modalinvoice',
  templateUrl: './modalinvoice.component.html',
  styleUrls: ['./modalinvoice.component.scss'],
})
export class ModalinvoiceComponent {
  @ViewChild(MatRadioGroup) radioGroup?: MatRadioGroup;
  editMode = false;
  categories: string[] = ['Approved'];
  contactForm: FormGroup;
  // invoiceForm: FormGroup;
  durationInSeconds = 5;
  dateFormat = 'yyyy-MM-dd';
  startDate?: any = new Date();
  endDate?: any = new Date();
  invoiceGenerated = false;  
  indata:any;
  clientAddress: any;
  payOrder: any;
  sfdc: any;
  pa: any;
  totalManDays: any;
  manDays: any;
  invoiceAmount: any;
  totalInvoiceAmount: any;
  
  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private api: ApiServicesService,
    public modalRef: MdbModalRef<ModalinvoiceComponent>
  ) {
    this.contactForm = this.fb.group({
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      projectName: ['', Validators.required],
      // message: ['', Validators.required]
    });
    }
    projectName?: string;
    duration?: string;
    description?: string;
    date?: string;

  ngOnInit(): void {}

  close() {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }

  onClickInvoiceSave(){
    // console.log(this.invoiceForm.value);
    const indata = {
      // date:'23/4/2023',
      // clientAddress:'4567',
      // payOrder:'456',
      // sfdc:'45678',
      // pa:'567',
      // totalManDays:'10',
      // manDays:'2',
      // invoiceAmount:'1000',
      // totalInvoiceAmount:'10000'
       date:this.date,
       clientAddress:this.clientAddress,
       payOrder:this.payOrder,
       sfdc:this.sfdc,
       pa:this.pa,
       totalManDays:this.totalManDays,
       manDays:this.manDays,
       invoiceAmount:this.invoiceAmount,
       totalInvoiceAmount:this.totalInvoiceAmount,
    }
    console.log("++++++++++++++++",indata);
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }

  editInvoice()
  {
    this.editMode = true;
    console.log('editable');
  }
  onGenerateClick() {
    this.invoiceGenerated = true;
    console.log('Generated invoice is true now');
    const startDate = formatDate(
      this.contactForm.value.startDate,
      this.dateFormat,
      'en-US'
    );
    const endDate = formatDate(
      this.contactForm.value.endDate,
      this.dateFormat,
      'en-US'
    );
    this.contactForm.get("startDate")?.setValue(startDate);
    this.contactForm.get("endDate")?.setValue(endDate);
    console.log('Start date: ' + startDate, 'end date: ' + endDate);
    console.log(this.contactForm.value);
    this.api.getInvoiceDetails().subscribe((data: any) => {
      this.clientAddress = data.clientAddress;
      this.payOrder = data.payOrder;
      this.sfdc = data.sfdc;
      this.pa = data.pa;
      this.totalManDays = data.totalManDays;
      this.manDays = data.manDays;
      this.invoiceAmount = data.invoiceAmount;
      this.totalInvoiceAmount = data.totalInvoiceAmount;
    });
  
    // const closeMessage = 'Modal closed';
    // this.modalRef.close(closeMessage);
    // this.snackBar.open(
    //   'Thank you for contacting us. We will get back to you soon!',
    //   '',
    //   {
    //     duration: this.durationInSeconds * 1000,
    //   }
    // );
    // this.contactForm.reset();
  }

  applyFilterForCategory() {
    const selectedValue = this.radioGroup?.value;
    if (selectedValue === 'All') {
      // this.dataSource.filter = ''; // clear filter
      console.log('approved');
    } else {
      console.log('applyFilterForCategory' + this.radioGroup?.value);
      // this.dataSource.filter = selectedValue;
    }
  }
}
