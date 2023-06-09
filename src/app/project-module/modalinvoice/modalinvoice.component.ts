import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ApiServicesService } from 'src/app/base-api/api-services.service';
import { InvoiceApiService } from 'src/app/base-api/invoice-api.service';

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
  indata: any;
  clientAddress?: any = localStorage.getItem('clientAddress');
  payOrder?: any = localStorage.getItem('po');
  sfdc?:  any = localStorage.getItem('sfdc');
  pa?:  any = localStorage.getItem('pa');
  totalManDays?:  any = localStorage.getItem('totalManDays');
  manHours?: any;
  invoiceAmount?: any;
  totalInvoiceAmount?: any;
  rate: any;
  consultant: any;
  projectId: any;
  projectName?: any = localStorage.getItem('projectName');
  duration?: string;
  description?: string;
  documentId: any;
  date?: any = new Date();

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private api: ApiServicesService,
    private invoiceApi: InvoiceApiService,
    public modalRef: MdbModalRef<ModalinvoiceComponent>
  ) {
    this.contactForm = this.fb.group({
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      projectName: [this.projectName, Validators.required],
      // message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    console.log(this.payOrder);
  }

  close() {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }

  onClickInvoiceSave() {
    // console.log(this.invoiceForm.value);
    const date = formatDate(this.date, this.dateFormat, 'en-US');
    // const indata = {
    //   // date:'23/4/2023',
    //   // clientAddress:'4567',
    //   // payOrder:'456',
    //   // sfdc:'45678',
    //   // pa:'567',
    //   // totalManDays:'10',
    //   // manDays:'2',
    //   // invoiceAmount:'1000',
    //   // totalInvoiceAmount:'10000'
    //   date: date,
    //   clientAddress: this.clientAddress,
    //   payOrder: this.payOrder,
    //   sfdc: this.sfdc,
    //   pa: this.pa,
    //   totalManDays: this.totalManDays,
    //   manHours: this.manHours,
    //   invoiceAmount: this.invoiceAmount,
    //   totalInvoiceAmount: this.totalInvoiceAmount,
    //   projectId: '10',
    //   projectName: 'DIGI-TEL',
    //   consultant: 'hari',
    //   startDate: '23/4/2023',
    //   endDate: '23/4/2023',
    //   duration: '2',
    //   rate: 300,
    //   note: 'done virtually',
    // };

    const updatedData = {
      date: date,
      clientAddress: this.clientAddress,
      projectName: this.projectName,
      consultant: this.consultant,
      note: 'service done virtually',
      payOrder: this.payOrder,
      sfdc: this.sfdc,
      pa: this.pa,
      totalManDays: this.totalManDays,
      manHours: this.manHours,
      invoiceAmount: this.invoiceAmount,
      totalInvoiceAmount: this.totalInvoiceAmount,
      projectId: this.projectId,
      startDate: this.contactForm.get("startDate")?.value,
      endDate: this.contactForm.get("endDate")?.value,
      duration: this.duration,
      rate: this.totalInvoiceAmount,
    };

    console.log('++++++++++++++++', updatedData);
    this.invoiceApi.createInvoice(updatedData).subscribe((data) => {
      console.log('invoice response' + JSON.stringify(data));
      this.documentId = data.pdfDocument.documentId;
      // window.location.reload();
    });
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }

  editInvoice() {
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
    this.contactForm.get('startDate')?.setValue(startDate);
    this.contactForm.get('endDate')?.setValue(endDate);
    console.log('Start date: ' + startDate, 'end date: ' + endDate);
    console.log(this.contactForm.value);

    this.invoiceApi.getProjectDetails(this.contactForm.value).subscribe((res:any) => {
      console.log(JSON.stringify(res));
      console.log(res.projectDetails.clientAddress);
      this.clientAddress = res.projectDetails.clientAddress;
      this.payOrder = res.projectDetails.po;
      this.sfdc = res.projectDetails.sfdc; //NEEDED DONT REMOVE THIS
      this.pa = res.projectDetails.pa;
      this.totalManDays = res.projectDetails.totalManDays;
      this.manHours = res.weeklyTimesheet.duration;
      this.invoiceAmount = 20000;
      this.totalInvoiceAmount = res.projectDetails.totalAmount;
      this.projectName = res.projectDetails.projectName;
      this.consultant = res.projectDetails.employeeName;
      this.projectId = res.projectDetails.projectId;
    })

    // this.clientAddress = 'Madison USA';
    // this.payOrder = '12345';
    // this.sfdc = '12345'; //NEEDED DONT REMOVE THIS
    // this.pa = '544785';
    // this.totalManDays = 10;
    // this.manHours = 6;
    // this.invoiceAmount = 20000;
    // this.totalInvoiceAmount = 50000;

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
