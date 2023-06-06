import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeApiService } from 'src/app/base-api/employee-api.service';

export interface PeriodicElement {
  collegeName: string;
  degree: string;
  specialization: String;
  year: String;
  graduate: String;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     collegeName: 'NEC',
//     degree: 'MSC',
//     specialization: 'something',
//     year: '2',
//     graduate: 'Graduated'
//     // field: 'developer'
//   },
//   {
//     collegeName: 'NEC',
//     degree: 'BSC',
//     specialization: 'something',
//     year: '3',
//     graduate: 'Graduated'
//   },
// ];

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})

export class EducationComponent {
  
  myForm!: FormGroup;
  isReadOnly = true;
  employeeId?: any = localStorage.getItem('employeeId');

  @ViewChild(MatRadioGroup) radioGroup?: MatRadioGroup;
  // dataSource?: any;
  formGroups: FormGroup[] = [];
     
  // ELEMENT_DATA?: any[];
  ELEMENT_DATA?: PeriodicElement[] = [];
  // dataSource?: any;
  dataSource?: MatTableDataSource<PeriodicElement>;
  // categories: string[] = ['Active', 'UnAssigned', 'Completed', 'All'];
  displayedColumns: string[] = [
    'collegeName',
    'degree',
    'specialization',
    'year',
    'graduate',
    'action',
  ];

  constructor(private router: Router, private api: EmployeeApiService, private formBuilder: FormBuilder) {}

  createFormGroup(element: any): FormGroup {
    return this.formBuilder.group({
      collegeName: [element.collegeName],
      degree: [element.degree],
      specialization: [element.specialization],
      year: [element.year],
      graduate: [element.graduate],
    });
  }

  ngOnInit(): void {
    console.log("Im'in");
    console.log("Im'in");

    this.myForm = this.formBuilder.group({
      collegeName: [''],
      degree: [''],
      specialization: [''],
      year: [''],
      graduate: [''],
    });

    this.api.getListOfEducation(this.employeeId).subscribe((data) => {
      console.log('List of EducationDetails ' + JSON.stringify(data));

      const updatedEducationDetails: Array<object> = data.educationDetails.map((element: any) => {
        return {
          collegeName: element.collegeName ?? 'N/A',
          degree: element.degree ?? 'N/A',
          specialization: element.specialization ?? 'N/A',
          year: element.year ?? 'N/A',
          graduate: element.graduate ?? 'N/A',
        };
        
      });
      console.log('updatedEducationDetails', updatedEducationDetails);

      this.ELEMENT_DATA = updatedEducationDetails as PeriodicElement[];
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

      if (updatedEducationDetails.length > 0) {
        // this.formGroups = updatedEducationDetails.map((element) => {
        //   return this.createFormGroup(element);
        // });
        const firstJobHistory = updatedEducationDetails[0];
        this.myForm.setValue(firstJobHistory);
      }

      this.formGroups = updatedEducationDetails.map((any) => {
        return this.createFormGroup(any);
      });

    });
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   console.log('filterValue', filterValue);
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  // applyFilterForCategory() {
  //   const selectedValue = this.radioGroup?.value;
  //   if (selectedValue === 'All') {
  //     this.dataSource.filter = ''; // clear filter
  //   } else {
  //     console.log('applyFilterForCategory' + this.radioGroup?.value);
  //     this.dataSource.filter = selectedValue;
  //   }
  // }

  deleteEmployeeInfo(employeeId: any) {
    this.api.deleteEducationDetails(employeeId).subscribe((data) => {
      console.log('deleted successfully' + JSON.stringify(data));
    })
    alert('deleted education details');
    console.log('delete');
  }

  onEdit() {
    this.isReadOnly = false;
  }

  onSubmit() {
    this.isReadOnly = false;

    const educationDetails = this.formGroups.map((formGroup) => {
      return formGroup.value;
    });

    const updatedEducationDetails = {
      employeeId: this.employeeId,
      employeeName: 'string',
      educationDetails: educationDetails,
    };

    console.log('updatedEducationDetails', updatedEducationDetails);

    this.api.updateEducationDetails(updatedEducationDetails).subscribe((data: any) => {
      console.log('updated successfully' + JSON.stringify(data));
      alert('updated successfully');
      window.location.reload();
    }, (error: any) => {
      console.log('error', error);
      alert('error');
      }
    );
  }

}
