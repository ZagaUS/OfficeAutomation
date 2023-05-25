import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/base-api/api-services.service';
import { MatTableDataSource } from '@angular/material/table';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {

  dataSource?: any;
  projectId?: any = localStorage.getItem("projectId");

  displayedColumns: string[] = [
    'projectName',
    'quoteNumber',
    'validDate',
    'totalManDays',
    'totalAmount',
    'action',
  ];

  constructor(private router: Router, private apiService: ApiServicesService, private modalService: MdbModalService){

  }

  ngOnInit(): void {
    console.log('im in');
    this.apiService.getAllQuotes(this.projectId).subscribe((data) => {
      console.log('List of Quote ' + JSON.stringify(data));
      this.dataSource = new MatTableDataSource(data);
    });
    
  }

  viewQuote(quoteName?: any) {
    console.log('viewQuote',quoteName);
    // localStorage.setItem('projectId', projectId);
    localStorage.setItem('quoteName', quoteName);
    // this.router.navigate(['/projectModule']);
  }
onCreate(){}

onDelete(quoteId?: any){
  this.apiService.deleteQuoteById(quoteId).subscribe((data) => {
    console.log('List of Quote'+ JSON.stringify(data));
    })

    alert('successfully deleted the quote')
    console.log('validating the delete alert box');
    window.location.reload();
}

onSend(){}

onDownload(){}

viewAsPDF(quoteId?: any){
  console.log('viewQuotePDF', quoteId);
  const projectId = localStorage.getItem('projectId');

  this.router.navigate(['']);

}

view(quoteId?: any){
  console.log('view the quote',quoteId);
   localStorage.setItem('quoteId', quoteId);

   this.router.navigate(['/viewQuote'])
}


}
