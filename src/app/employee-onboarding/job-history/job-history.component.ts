import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.scss']
})
export class JobHistoryComponent {
  myForm!: FormGroup;
  isReadOnly = true;
  
  constructor(private fb: FormBuilder) { 
    
}
ngOnInit() {
  // this.http.get('/api/employee').subscribe((employee: any) => {
  // Use the response to set the initial values of the form fields
  this.myForm = this.fb.group({
  companyName: ['ZAGAA'],
  experience: ['3'],
  startDate: ['2022-01-01'],
  endDate: ['2022-01-01'],
  field:['Devops'],
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

