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
      this.projectMgtUrl + '/zaga/projectManagement/viewProjectDetails'
    );
  }
  getProjectDetails() {
    return this.http.get<any>(
      this.projectMgtUrl + '/zaga/projectManagement/viewProjectDetailsById/41'
    )
  }
  updateProjectDetails(data: any) {
    return this.http.put(this.projectMgtUrl + '/zaga/projectManagement/updateProjectDetails',data);
  }
}
