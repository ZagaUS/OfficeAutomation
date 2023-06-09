import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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

  getPdf(documentId: any): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'text/plain');
    return this.http.get(this.invoiceUrl + `/invoice/${documentId}/pdf`, {
      headers,
      responseType: 'blob',
    });
  }
}
