import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeApiService } from 'src/app/base-api/employee-api.service';

@Component({
  selector: 'app-dayoff',
  templateUrl: './dayoff.component.html',
  styleUrls: ['./dayoff.component.scss']
})
export class DayoffComponent {
  myForm: FormGroup;
  isReadOnly = true;
  employeeId?: any = localStorage.getItem('employeeId');

  constructor(
    private fb: FormBuilder,
    private api: EmployeeApiService
  ) {
    this.myForm = this.fb.group({
      employeeId: [''],
      employeeName: [''],
      allocatedLeave: [''],
      used: [''],
      balance: [''],
    });
  }

  ngOnInit() {
    this.api.getListOfDayOffbyId(this.employeeId).subscribe((data) => {
      console.log('List of dayOFF ' + JSON.stringify(data));
      this.myForm.setValue(data);
    });
  }

  onEdit() {
    this.isReadOnly = false;
  }

  onSubmit() {
    this.isReadOnly = false;
    const formValues = this.myForm.value;
    console.log(formValues);
    this.api.updateDayOff(this.employeeId,formValues).subscribe((data:any) => {
      console.log("data updated",data);
    });
  }
}

