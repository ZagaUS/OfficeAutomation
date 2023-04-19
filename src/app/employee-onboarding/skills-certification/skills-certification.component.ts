import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeApiService } from 'src/app/base-api/employee-api.service';

@Component({
  selector: 'app-skills-certification',
  templateUrl: './skills-certification.component.html',
  styleUrls: ['./skills-certification.component.scss']
})
export class SkillsCertificationComponent {
  myForm!: FormGroup;
  isReadOnly = true;
  employeeId: any = 1;
  skillsNameArr: any;
  toolsNameArr: any;
  
  
  constructor(private fb: FormBuilder,
              private api: EmployeeApiService) { 
    
                this.myForm = this.fb.group({
                  employeeId: [''],
                  employeeName: [''],
                  skillsName: this.fb.array(['', '', '']), 
                  toolsName: this.fb.array(['', '', '']), 
                  yearsOfExperience: [''],
                  compentencyLevel: ['']
                });

              }

ngOnInit() {
  this.api.getSkillDetailsbyId(this.employeeId).subscribe((data) => {
    console.log('SKILLS ' + JSON.stringify(data));
    this.myForm.patchValue({
      employeeId: data.employeeId,
      employeeName: data.employeeName,
      skillsName: this.mapSkillsName(data.skillsName).value,
      toolsName: this.mapToolsName(data.toolsName).value,
      yearsOfExperience: data.yearsOfExperience,
      compentencyLevel: data.compentencyLevel
    });
    console.log("array++++",this.mapSkillsName(data.skillsName).value);
  });
}
mapSkillsName(skillsName: string[]): FormArray {
  const formArray = this.fb.array([]);
  skillsName.forEach(skillsName => {
    formArray.push(this.fb.control(skillsName));
    console.log(skillsName);
    console.log(formArray);
  });
  this.skillsNameArr = skillsName;
  return formArray;
  // console.log(formArray);
}
mapToolsName(toolsName: string[]): FormArray {
  const formArray = this.fb.array([]);
  toolsName.forEach(name => {
    formArray.push(this.fb.control(name));
    // this.toolsNameArr.push(name);
  });
  this.toolsNameArr = toolsName;
  return formArray;
}



onEdit() {
  this.isReadOnly = false;
}

  
  onSubmit() {
    this.isReadOnly = false;
    const formValues = this.myForm.value;
    console.log(formValues);
  
  }
}
