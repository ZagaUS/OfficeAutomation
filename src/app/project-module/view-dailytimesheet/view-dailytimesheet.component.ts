import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ApiServicesService } from 'src/app/base-api/api-services.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

// export interface Owner {
//   name: string;
// }

@Component({
  selector: 'app-view-dailytimesheet',
  templateUrl: './view-dailytimesheet.component.html',
  styleUrls: ['./view-dailytimesheet.component.scss']
})
export class ViewDailytimesheetComponent {
  // dailyTimesheet: any = {
  //   redHatOwners: [{ name: '' }],
  //   clientOwners: [{ name: '' }]
  // };
  dailyTimesheet: FormGroup;
  editMode = false;
  saveMode = true;
  dailyTimesheetId?: any = localStorage.getItem('dailyTimesheetId');

  constructor(private router: Router, private api: ApiServicesService, private snackBar: MatSnackBar, private location: Location, private formBuilder: FormBuilder) {
    this.dailyTimesheet = this.formBuilder.group({
      projectId: '',
      // dailyTimesheetId: '',
      projectName: '',
      employeeName: '',
      hours: 0,
      date: '',
      supportTicket: '',
      clientOwners: this.formBuilder.array([]),
      redHatOwners: this.formBuilder.array([]),
      description: '',
      timesheetType: '',

    });
   }

  // ngOnInit() {
  //   this.api.getDailyTimesheetByTimesheetId(this.dailyTimesheetId).subscribe((data) => {
  //     this.dailyTimesheet = data;
  //   });
  // }

  ngOnInit() {
    // Populate the redHatOwners and clientOwners form arrays with initial values
    this.api.getDailyTimesheetByTimesheetId(this.dailyTimesheetId).subscribe((data: any) => {
      // this.dailyTimesheet = data;
      this.dailyTimesheet.patchValue(data);
      this.dailyTimesheet.setControl('redHatOwners', this.mapRedHatOwners(data.redHatOwners));
      this.dailyTimesheet.setControl('clientOwners', this.mapClientOwners(data.clientOwners));

    });
    this.dailyTimesheet.addControl('dailyTimesheetId', this.formBuilder.control(''));

  }

  get redHatOwnersArr() {
    return this.dailyTimesheet.get('redHatOwners') as FormArray;
  }

  get clientOwnersArr() {
    return this.dailyTimesheet.get('clientOwners') as FormArray;
  }

  addRedhatOwner() {
    this.redHatOwnersArr.push(this.formBuilder.control(''));
  }

  addClientOwner() {
    this.clientOwnersArr.push(this.formBuilder.control(''));
  }

  mapOwners(owners: string[] | null): FormArray {
    const formArray = this.formBuilder.array([]);
    if (owners) {
      owners.forEach((owner) => {
        formArray.push(this.formBuilder.control(owner));
      });
    }
    return formArray;
  }
  
  mapRedHatOwners(redHatOwners: string[] | null): FormArray {
    return this.mapOwners(redHatOwners);
  }
  
  mapClientOwners(clientOwners: string[] | null): FormArray {
    return this.mapOwners(clientOwners);
  }

  editDaily() {
    this.editMode = true;
  }

  saveDaily() {
    const formData = this.dailyTimesheet.value;
    this.api.updateDailyTimesheet(formData).subscribe(
      (data: any) => {
        console.log('Data updated', data);
        this.openSnackbar('Successfully saved', 1500);
        // Perform any additional actions after saving the data
      },
      (error: any) => {
        console.error('Error occurred while saving', error);
        this.openSnackbar('Failed to save', 1500);
        // Perform any error handling or display error messages
      }
    );
  }

onSubmit() {
  const formValues = this.dailyTimesheet.value;
  console.log(formValues);
}

openSnackbar(message: string, duration: number) {
  const config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    panelClass: ['center-snackbar'],
  };
  this.snackBar.open(message, 'Close', {
    duration: duration,
  });
}

}