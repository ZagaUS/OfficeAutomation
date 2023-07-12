import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/base-api/api-services.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
export interface RedHatOwners {
  name: string[];
}
export interface ClientOwners {
  name: string[];
}
interface MyData {
  [key: string]: any;
}


@Component({
  selector: 'app-view-dailytimesheet',
  templateUrl: './view-dailytimesheet.component.html',
  styleUrls: ['./view-dailytimesheet.component.scss']
})
export class ViewDailytimesheetComponent {
  editMode = false;
  saveMode = true;
  dailyTimesheet?:any;
  employeeName?: string ;
  projectName?: string;
  projectId?: string;
  date?: any;
  timesheetType?:any;
  supportTicket?:any;
  hours?: number;
  DailyTimeSheetedit?: any;
  // startTime?: string;
  // endTime?: string;
  description?: any ;
 redHatOwners?: RedHatOwners[] ;
 clientOwners?: ClientOwners[] ;
//  timesheetType: any = localStorage.getItem('timesheetType');
dailyTimesheetId?: any = localStorage.getItem('dailyTimesheetId');


constructor(private router:Router,private api:ApiServicesService,private snackBar: MatSnackBar,private location: Location){

}
editable = false;
readonly = true;
formData: { [key: string]: any } = {};
data: MyData[] = [];
ngOnInit() {
  // const newLocal = any = localStorage.getItem('timesheetType');
  this.dailyTimesheet = {
    employeeName: 'Anushiya',
    projectName: 'DIGI-TEL',
    projectId: '12345',
    dailyTimesheetId: '',
    date: '',
    hours: 1,
    timesheetType: 'Daily',
    description: 'Discuss project status',
    redHatOwners: [
      [ 'ari', ' ', ' ']
      
    ],
    clientOwners: [
 [     '',
      '',
      '']
    ],
  }

  //  if (this.selectedValue === 'Daily') {
  //       this.daily = true;
  //       this.weekly = false;
  //       this.external = false;
  //       this.columnShown = this.dailyDisplayedColumns;

  // dailyTimesheetId = localStorage.setItem('dailyTimesheetId');
  this.api.getDailyTimesheetByTimesheetId(this.dailyTimesheetId).subscribe((data) => {
    console.log(data.employeeName);
    console.log(data.date);
    this.dailyTimesheet = data;
  });
  console.log('meetingMinutesId',localStorage.getItem('date'));
console.log('meetingMinutesId',localStorage.getItem('dailyTimesheetId'));
console.log('MeetId',localStorage.getItem('dailytimesheetId'));

}
edit() {
  console.log('editable');
  this.editable = !this.editable;
  this.readonly = !this.readonly;
  this.editable = true;
}
// editDaily(){
//   this.api.updateDailyTimesheet(this.dailyTimesheet).subscribe()
// }

updateFormData(key: string, value: any) {
  this.formData = { ...this.formData, [key]: value };
}
submitForm(formData: any) {
  const updatedData: { [key: string]: any } = {};
  Object.entries(this.data).forEach(([key, value]) => {
    updatedData[key] = formData.hasOwnProperty(key) ? formData[key] : value;
  });
  console.log(formData);
  console.log('updated data', updatedData);
  this.api.updateDailyTimesheet(updatedData).subscribe((data: any) => {
    console.log('data updated', data);
    alert('updated data successfully');
  });
}
editDailytimeSheet(){
  this.editMode = true;
  console.log('editable');
}

onclickdailyTimesheet(){
  this.DailyTimeSheetedit=true;
  console.log("now edit all fields in daily timesheet")
}

editDaily() {
  this.editMode = !this.editMode;
  console.log('editable');
  // this.openSnackbar('Updated successfully', 1500);
  
}
saveDaily(){ 
  console.log("Edited data " +   JSON.stringify(this.dailyTimesheet) );
  this.api.updateDailyTimesheet(this.dailyTimesheet).subscribe((data: any) => {
    console.log('data updated', data);
    // alert('updated data successfully');
    this.openSnackbar('successfully saved', 1500);
    window.location.reload();
    this.location.back();
  });
}

openSnackbar(message: string, duration: number) {
  const config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom', // Change the vertical position to 'bottom'
    panelClass: ['center-snackbar'],
  };
  this.snackBar.open(message, 'Close', {
    duration: duration,
  });
}

}