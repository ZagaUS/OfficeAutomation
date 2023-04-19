import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeApiService } from 'src/app/base-api/employee-api.service';

@Component({
  selector: 'app-view-employee-info',
  templateUrl: './view-employee-info.component.html',
  styleUrls: ['./view-employee-info.component.scss']
})
export class ViewEmployeeInfoComponent {

  myForm!: FormGroup;
  isReadOnly = true;
  employeeId?: any = localStorage.getItem('employeeId');
  
  constructor(private fb: FormBuilder,
    private api:EmployeeApiService) { 
    
  this.myForm = this.fb.group({
    employeeName: [''],
    employeeId: [''],
    employeeRole: [' '],
    jobTitle: [''],
    employeeEmail: ['  '],
    password: [],
    dateOfJoining: [''],
    department:[''],
    reportingManager:[''],
    employeeStatus:[''],
    overallExperience:[''],
    projectAssignmentStatus:[''],
  });
}
ngOnInit() {
  this.api.getEmployeeInfobyId(this.employeeId).subscribe((data) => {
    console.log('List of employeeINFO ' + JSON.stringify(data));
    this.myForm.setValue(data);
  });
}  

onEdit() {
  this.isReadOnly = false;
}

  
  onSubmit() {
    this.isReadOnly = false;
    const empValue = this.myForm.value;
    console.log("Employee infoo",empValue);
    this.api.updateEmployeeInfo(this.employeeId,empValue).subscribe((data:any) => {
      console.log("data updated+++++++++++++",JSON.stringify(data));
    });

    }
  
}
