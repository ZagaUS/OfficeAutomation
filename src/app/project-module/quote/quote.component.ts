import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {

  dataSource?: any;


  viewQuote(quoteName?: any) {
    console.log('viewQuote',quoteName);
    // localStorage.setItem('projectId', projectId);
    localStorage.setItem('quoteName', quoteName);
    // this.router.navigate(['/projectModule']);
  }
onCreate(){}
}
