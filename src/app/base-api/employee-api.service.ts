import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  getweeklyTimesheetfile(document: Document) {
    throw new Error('Method not implemented.');
  }
  employeeURL = environment.employeeUrl;
  constructor(private http: HttpClient) {}

  getListOfDayOffbyId(employeeId: string) {
    return this.http.get<any>(
      this.employeeURL + `getDayOffById/?employeeId=${employeeId}`
    );
  }
  updateDayOff(employeeId: string,formValues:any){
    return this.http.put<any>(
      this.employeeURL + 'updateDayOff/' +employeeId,
      formValues
    );
  }
  getSkillDetailsbyId(employeeId: string){
    return this.http.get<any>(
      this.employeeURL + `getSkillsById/?employeeId=${employeeId}`
    )
    }

    getPersonalInfobyId(employeeId: string){
      return this.http.get<any>(
        this.employeeURL + `getPersonalInfoById/?employeeId=${employeeId}`
      );
    }
    updatePersonalValues(employeeId: string, PersonalValues:any){
      return this.http.put<any>(
        this.employeeURL + 'updateEmployeeInfo/' +employeeId,
        PersonalValues
      );
    }

    getEmployeeInfobyId(employeeId: string){
      return this.http.get<any>(
        this.employeeURL + 'getEmployeeInfo/' +employeeId
      );
    }
    updateEmployeeInfo(employeeId: string,empValue:any){
      return this.http.put<any>(
        this.employeeURL + 'updateEmployeeInfo/' +employeeId,
        empValue
      );
    }

    getListOfJobHistory(employeeId: string){
      return this.http.get<any>(
        this.employeeURL + 'getEmployeeInfo/' +employeeId
      );
    }
}
