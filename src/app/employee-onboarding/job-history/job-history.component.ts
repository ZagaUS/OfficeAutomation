import { Component,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/base-api/api-services.service';
import { EmployeeApiService } from 'src/app/base-api/employee-api.service';

export interface PeriodicElement {
  companyName: string;
  experience: String;
  startDate: String;
  endDate: String;
  field: String;
}

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.scss'],
})
export class JobHistoryComponent {
  myForm!: FormGroup;
  isReadOnly = true;
  employeeId?: any = localStorage.getItem('employeeId');

  @ViewChild(MatRadioGroup) radioGroup?: MatRadioGroup;

  formGroups: FormGroup[] = [];

  ELEMENT_DATA?: PeriodicElement[] = [];

  dataSource?: MatTableDataSource<PeriodicElement>;
  displayedColumns: string[] = [
    'companyName',
    'experience',
    'startDate',
    'endDate',
    'field',
  ];

  constructor(private router: Router, private api: EmployeeApiService, private formBuilder: FormBuilder) {}

  createFormGroup(element: any): FormGroup {
    return this.formBuilder.group({
      companyName: [element.companyName],
      experience: [element.experience],
      startDate: [element.startDate],
      endDate: [element.endDate],
      field: [element.field],
    });
  }

  ngOnInit(): void {
    console.log("Im'in");
    console.log("Im'in");

    this.myForm = this.formBuilder.group({
      companyName: [''],
      experience: [''],
      startDate: [''],
      endDate: [''],
      field: [''],
    });

    this.api.getListOfJobHistory(this.employeeId).subscribe((data) => {
      console.log('API Response:', data);
      console.log('List of JobHistory ' + JSON.stringify(data));

      const updatedjobHistoryDetails: Array<object> = data.jobHistoryDetails.map((element: any) => {
        return {
          companyName: element.companyName ?? 'N/A',
          experience: element.experience ?? 'N/A',
          startDate: element.startDate ?? 'N/A',
          endDate: element.endDate.trim() === '' ? 'N/A' : element.endDate,
          field: element.field ?? 'N/A'
        };
      });

      console.log(updatedjobHistoryDetails);
      this.ELEMENT_DATA = updatedjobHistoryDetails as PeriodicElement[];
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

      if (updatedjobHistoryDetails.length > 0) {
        const firstJobHistory = updatedjobHistoryDetails[0];
        this.myForm.setValue(firstJobHistory);
      }

      this.formGroups = updatedjobHistoryDetails.map((any) => {
        return this.createFormGroup(any);
      });
    });    
  }

  onEdit() {
    this.isReadOnly = false;
  }

  onSubmit() {
    this.isReadOnly = false;

    const jobHistoryDetails = this.formGroups.map((formGroup) => {
      return formGroup.value;
    });
  
    const updatedJobHistory = {
      employeeId: this.employeeId,
      employeeName: 'string',
      jobHistoryDetails: jobHistoryDetails,
    };

    console.log('updatedJobHistory', updatedJobHistory);
      this.api.updateJobHistoryDetails(updatedJobHistory).subscribe(
        (data: any) => {
          console.log('Updated JobHistory ' + JSON.stringify(data));
          alert('Updated successfully');
          window.location.reload();
        },
        (error) => {
          console.error('Error updating JobHistory', error);
          alert('Failed to update job history');
        }
      );
  }

}
