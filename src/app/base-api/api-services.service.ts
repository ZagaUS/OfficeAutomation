import { HttpClient } from '@angular/common/http';
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
  getExternalTimesheet(weeklyTimesheet: any) {
    return this.http.post(
      this.projectMgtUrl +
        `projectDetails/uploadPdfDocument?${weeklyTimesheet.endDate}&${weeklyTimesheet.startDate}&${weeklyTimesheet.projectId}&${weeklyTimesheet.projectName}`,
      weeklyTimesheet.uploadfile
    );
  }

  createWeeklyTimesheetbyDate(weeklyData: any) {
    return this.http.post(
      this.projectMgtUrl +
        `/weeklyTimesheet/createTimesheet?${weeklyData.endDate}&${weeklyData.projectId}&${weeklyData.projectName}&${weeklyData.startDate}`,
      null
    );
  }

  getInvoiceDetails(){
    return this.http.get<any>(
      this.projectMgtUrl + '/projectDetails/viewProjectDetails'
    );
  }
}
