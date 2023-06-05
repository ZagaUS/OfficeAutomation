import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServicesService } from 'src/app/base-api/api-services.service';
import { Location } from '@angular/common';
import { MatSnackBar, MatSnackBarConfig  } from '@angular/material/snack-bar';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';

interface MyData {
  [key: string]: any;
}
@Component({
  selector: 'app-view-quote',
  templateUrl: './view-quote.component.html',
  styleUrls: ['./view-quote.component.scss']
})
export class ViewQuoteComponent {

   @Input()
  value?: any;
  // projectId?: any;
  quoteId?: any = localStorage.getItem('quoteId');
  // quoteId?: any ;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiServicesService,
    private location: Location,
    private snackBar: MatSnackBar,
    
  ) {}

  editable = false;
  readonly = true;
  formData: { [key: string]: any } = {};

  // data: MyData[] = [];
   data: any;

   desiredformat?: any[] = ["projectName",
"employeeName",
"employeeRole",
"quoteId",
"validDate",
"unitPrice",
"totalManDays",
"startDate",
"endDate",
"duration",
"po",
"pa",
"sfdc",
"totalPrice",
// "gstPercent",
"whtAmount",
"totalAmount",
"to",
"quoteStatus",
"clientCurrency",
"date",
"pdfStatus",
"projectId" ]


  ngOnInit(): void {
    // this.projectId = "41";
    this.api.getQuoteView(this.quoteId).subscribe((data) => {
      console.log('List of Quotes' + JSON.stringify(data));
      this.data = data;
    });
  }

  openSnackbar(message: string, duration: number) {
    const config: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom', // Change the vertical position to 'bottom'
      panelClass: ['center-snackbar'],
    };
    this.snackBar.open(message, 'Close', {
      duration: duration,
    });
  }

  edit() {
    console.log('editable');
    this.editable = !this.editable;
    this.readonly = !this.readonly;
    this.editable = true;
  }

  updateFormData(key: string, value: any) {
    this.formData = { ...this.formData, [key]: value };
  }
  submitForm(formData: any) {
    // const updatedData: { [key: string]: any } = {};
    // Object.entries(this.data).forEach(([key, value]) => {
    //   updatedData[key] = formData.hasOwnProperty(key) ? formData[key] : value;
    // });
    // console.log(formData);
    console.log('updated data', this.data);
    this.api.updateQuote(this.data).subscribe((data: any) => {
      console.log('data updated', data);
      this.openSnackbar('Updated successfully', 1500);
      // this.location.back();
      
    });
  }
    onGenerateClick(){
      console.log('generate click' , this.quoteId);
      // const startDate = formatDate(
      //   this.quoteForm.value.startDate,
      //   this.dateFormat,
      //   'en-US'
      // );
      // const endDate = formatDate(
      //   this.quoteForm.value.endDate,
      //   this.dateFormat,
      //   'en-US'
      // );
      // const generateQuote = {
      //   projectId: localStorage.getItem('projectId'),
      //   projectName: localStorage.getItem('projectName'),
      //   // startDate: startDate,
      //   // endDate: endDate,
      // };
      // console.log(
      //   // 'Start date: ' + startDate,
      //   // 'end date: ' + endDate + ' ' +
      //    JSON.stringify(generateQuote)
      // );
      this.api.generateQuote(this.quoteId).subscribe((data) => {
        console.log('Data: ' + JSON.stringify(data));
        this.openSnackbar('Quote Generated  successfully', 1500);
        window.location.reload();
        this.location.back();
        
      });
  }

}
