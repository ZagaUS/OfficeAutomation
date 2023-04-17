import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-employee-info',
  templateUrl: './view-employee-info.component.html',
  styleUrls: ['./view-employee-info.component.scss']
})
export class ViewEmployeeInfoComponent {

  myForm!: FormGroup;
  isReadOnly = true;
  
  constructor(private fb: FormBuilder) { 
    
}
ngOnInit() {
  // this.http.get('/api/employee').subscribe((employee: any) => {
  // Use the response to set the initial values of the form fields
  this.myForm = this.fb.group({
  employeeName: ['Anushiya'],
  employeeId: ['1234'],
  employeeRole: ['Software developer'],
  gender: ['Female'],
  education: ['Bachelor of Science'],
  yearsOfExperience: [1],
  dateOfJoining: ['2022-01-01']
}); 
}  
//  });

onEdit() {
  this.isReadOnly = false;
}

  
  onSubmit() {
    this.isReadOnly = false;
    const formValues = this.myForm.value;
    console.log(formValues);

    }
  
}
