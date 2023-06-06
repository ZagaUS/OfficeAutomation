import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  getweeklyTimesheetfile(document: Document) {
    throw new Error('Method not implemented.');
  }
  employeeURL = environment.employeeUrl;
  constructor(private http: HttpClient) {}

  getEmployeeDetail() {
    return this.http.get<any>(this.employeeURL + 'getListOfEmployeeInfo');
  }

  getListOfDayOffbyId(employeeId: string) {
    return this.http.get<any>(
      this.employeeURL + `getDayOffById/?employeeId=${employeeId}`
    );
  }

  updateDayOff(formValues: any) {
    return this.http.put<any>(this.employeeURL + 'updateDayOff/', formValues);
  }

  getSkillDetailsbyId(employeeId: string) {
    return this.http.get<any>(
      this.employeeURL + `getSkillsById/?employeeId=${employeeId}`
    );
  }

  updateSkillDetails(employeeId: string, skillValues: any) {
    return this.http.put<any>(
      this.employeeURL + 'updateSkills/' + employeeId,
      skillValues
    );
  }

  getPersonalInfobyId(employeeId: string) {
    return this.http.get<any>(
      this.employeeURL + `getPersonalInfoById/?employeeId=${employeeId}`
    );
  }

  updatePersonalValues(PersonalValues: any) {
    return this.http.put<any>(
      this.employeeURL + 'updatePersonalInfo/',
      PersonalValues
    );
  }

  getEmployeeInfobyId(employeeId: string) {
    return this.http.get<any>(
      this.employeeURL + `getEmployeeInfo?employeeId=${employeeId}`
    );
  }

  updateEmployeeInfo(employeeId: string, empValue: any) {
    return this.http.put<any>(
      this.employeeURL + 'updateEmployeeInfo/' + employeeId,
      empValue
    );
  }

  getListOfJobHistory(employeeId: string) {
    return this.http.get<any>(
      this.employeeURL + `getJobHistoryById/?employeeId=${employeeId}`
    );
  }

  getListOfEducation(employeeId: string) {
    return this.http.get<any>(
      this.employeeURL + `getEducationDetailsById/?employeeId=${employeeId}`
    );
  }

  createEmployee(createEmployeeDetails: any) {
    console.log('created inside api', createEmployeeDetails);
    return this.http.post<any>(
      this.employeeURL + 'createEmployee',
      createEmployeeDetails
    );
  }

  deleteEmployee(employeeId: string) {
    return this.http.delete<any>(
      // this.employeeURL + 'deleteEmployee' + employeeId
      this.employeeURL + `deleteEmployee?employeeId=${employeeId}`
    );
  }

  downloadPDF(employeeId: string): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'text/plain');
    return this.http.get(this.employeeURL + `pdf/${employeeId}`, {
      headers,
      responseType: 'blob',
    });
  }

  upload(document: File, employeeId: string, name: string): Observable<any> {
    const metadata = `{ "employeeId": "${employeeId}", "employeeName": "${name}" }`;
    // const metadata = `{"employeeId":"33","employeeName":"22"}`;
    const formData = new FormData();
    console.log(metadata);
    formData.append('file', document, document.name);
    formData.append('metadata', metadata);
    console.log('upload Resume' + ' ' + formData);

    return this.http.post<any>(this.employeeURL + `upload`, formData);
  }
}
