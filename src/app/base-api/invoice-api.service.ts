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

  getProjectDetails(projectGetData: any){
    return this.http.get<any>(this.invoiceUrl + `/getProjectDetailsInvoice/${projectGetData.projectName},${projectGetData.startDate},${projectGetData.endDate}`);
  }

  createInvoice(invoiceData: any) {
    return this.http.post<any>(
      this.invoiceUrl + '/createInvoicee/pdf',
      invoiceData
    );
  }

  getPdf(documentId: any): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'text/plain');
    return this.http.get(this.invoiceUrl + `/invoice/creditNote/${documentId}/pdf`, {
      headers,
      responseType: 'blob',
    });
  }

  deleteInvoice(invoiceId: any){
    console.log('delete This invoice', invoiceId);
    return this.http.delete<any>(
      this.invoiceUrl+
      `/deleteInvoice/${invoiceId}`
      );
  }
   
  downloadInvoice(documentId: any): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'application/octet-stream');
    return this.http.get(
      this.invoiceUrl +
      `/download/${documentId}`,
       { headers, responseType: 'blob' }
    );
  }
  
  getAllInvoice(projectId?: any) {
    return this.http.get<any>(
      this.invoiceUrl + `/getProjectInvoices/${projectId}`
    );
  }

  getAllCreditNote(projectId?: any) {
    return this.http.get<any>(
      this.invoiceUrl + `/getCreditNotesByProjectId/${projectId}`
    );
  }

  createCreditNote(CreditNoteData: any) {
    return this.http.post<any>(
      this.invoiceUrl + '/createCreditNote/pdf',
      CreditNoteData
    );
  }

  deleteCreditNotes(documentId: any){
    console.log('delete This credit note', documentId);
    return this.http.delete<any>(
      this.invoiceUrl+
      `/deleteCreditNote/${documentId}`
      );
  }

  downloadCreditNote(documentId: any): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'application/octet-stream');
    return this.http.get(
      this.invoiceUrl +
      `/creditNotePdf/download/${documentId}`,
       { headers, responseType: 'blob' }
    );
  }

  getPdfCreditNote(documentId: any): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'text/plain');
    return this.http.get(this.invoiceUrl + `/creditNote/${documentId}/pdf`, {
      headers,
      responseType: 'blob',
    });
  }




  
}
