import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  projectMgtUrl = environment.projectMgtUrl;

  constructor(private http: HttpClient) {}

  getListOfProjects() {
    return this.http.get<any>(
      this.projectMgtUrl + '/projectDetails/viewProjectDetails'
    );
  }

  getDailyTimesheetByProjectId(projectId: string) {
    return this.http.get<any>(
      this.projectMgtUrl +
        '/dailyTimesheet/viewDailyTimesheetsByProjectId/' +
        projectId
    );
  }

  getWeeklyTimesheetByProjectId(projectId: string) {
    return this.http.get<any>(
      this.projectMgtUrl +
        '/weeklyTimesheet/getWeeklyTimesheetByProjectId/' +
        projectId
    );
  }
  getProjectDetails(projectId: string) {
    return this.http.get<any>(
      this.projectMgtUrl + '/projectDetails/viewProjectDetailsById/' + projectId
    );
  }

  updateProjectDetails(data: any) {
    return this.http.put(
      this.projectMgtUrl + '/projectDetails/updateProjectDetails',
      data
    );
  }

  createDailyTimesheet(dts: any) {
    return this.http.post(
      this.projectMgtUrl + '/dailyTimesheet/createDailyTimeSheet',
      dts
    );
  }
  createExternalTimesheet(
    weeklyTimesheet: any,
    projectId: any,
    projectName: any,
    docType: any
  ) {
    console.log(
      'createexternalTimesheet' +
        ' ' +
        weeklyTimesheet.uploadfile +
        ' ' +
        projectId +
        ' ' +
        projectName +
        ' ' +
        weeklyTimesheet.endDate +
        ' ' +
        weeklyTimesheet.startDate
    );
    return this.http.post(
      this.projectMgtUrl +
        `/projectDetails/uploadPdfDocument?documentType=${docType}&endDate=${weeklyTimesheet.endDate}&startDate=${weeklyTimesheet.startDate}&projectId=${projectId}&projectName=${projectName}`,
      weeklyTimesheet.uploadfile,
      {
        headers: { 'Content-Type': 'application/octet-stream' },
      }
    );
  }

  createWeeklyTimesheetbyDate(weeklyData: any) {
    return this.http.post(
      this.projectMgtUrl +
        `/weeklyTimesheet/createTimesheet?endDate=${weeklyData.endDate}&projectId=${weeklyData.projectId}&projectName=${weeklyData.projectName}&startDate=${weeklyData.startDate}`,
      null
    );
  }

  getInvoiceDetails() {
    return this.http.get<any>(
      this.projectMgtUrl + '/projectDetails/viewProjectDetails'
    );
  }

  getweeklyTimesheetfile(document: any): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'text/plain');
    console.log('checking the input', document);
    return this.http.get(
      this.projectMgtUrl +
        `/projectDetails/document/${document.documentId}` +
        `?documentType=${document.documentType}`,
      { headers, responseType: 'blob' }
    );
  }
  getExternalTimesheetData(projectId: any, docType: any) {
    return this.http.get<any>(
      this.projectMgtUrl +
        `/projectDetails/document/listByType/${projectId}` +
        `?documentType=${docType}`
    );
  }

  getWeeklyTimesheetDataByWeekId(weeklyTimesheetId: any) {
    return this.http.get<any>(
      this.projectMgtUrl +
        `/weeklyTimesheet/getWeeklyTimesheetByWeeklyTimesheetId/${weeklyTimesheetId}`
    );
  }

  updateWeeklyTimesheetData(weeklyTimesheetData: any) {
    return this.http.put<any>(
      this.projectMgtUrl + '/weeklyTimesheet/updateWeeklyTimesheet',
      weeklyTimesheetData
    );
  }

  deleteDailyTimesheet(dailyTimesheetId: any) {
    return this.http.delete<any>(
      this.projectMgtUrl +
        `/dailyTimesheet/deleteDailyTimeSheet/${dailyTimesheetId}`
    );
  }

  deleteWeeklyTimesheet(weeklyTimesheetId: any) {
    // return this.http.delete<any>( this.projectMgtUrl + ``
  }
}
