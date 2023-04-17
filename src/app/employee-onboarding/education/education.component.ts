import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  myForm!: FormGroup;
  isReadOnly = true;
  
  constructor(private fb: FormBuilder) { 
    
}
ngOnInit() {
  // this.http.get('/api/employee').subscribe((employee: any) => {
  // Use the response to set the initial values of the form fields
  this.myForm = this.fb.group({
  degree:['BE'],
  specialization:['something'],
  year: [4],
  graduate: ['GRADUATED']
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
