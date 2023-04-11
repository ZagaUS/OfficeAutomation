import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InvoiceApiService {
  invoiceUrl = environment.invoiceUrl;
  constructor(private http: HttpClient) {}

  getAllInvoices() {
    return this.http.get<any>(this.invoiceUrl + '/getAllInvoices');
  }

  createInvoice(invoiceData: any) {
    return this.http.post<any>(
      this.invoiceUrl + '/createInvoicee/pdf',
      invoiceData
    );
  }
}
