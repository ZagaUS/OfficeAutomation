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
  employeeId?: any = localStorage.getItem('employeeId');
  skillsNameArr: any;
  toolsNameArr: any;
  
  
  constructor(private fb: FormBuilder,
              private api: EmployeeApiService) { 
    
                this.myForm = this.fb.group({
                  employeeId: [''],
                  employeeName: [''],
                  skillsName: this.fb.array([]), 
                  toolsName: this.fb.array([]), 
                  yearsOfExperience: [''],
                  compentencyLevel: ['']
                });

              }

ngOnInit() {
  this.api.getSkillDetailsbyId(this.employeeId).subscribe((data) => {
    console.log('SKILLS ' + JSON.stringify(data));
    this.myForm.patchValue({
      employeeId: data?.employeeId,
      employeeName: data?.employeeName,
      skillsName: this.mapSkillsName(data?.skillsName)?.value,
      toolsName: this.mapToolsName(data?.toolsName)?.value,
      yearsOfExperience: data?.yearsOfExperience,
      compentencyLevel: data?.compentencyLevel
    });
    console.log("array++++",this.mapSkillsName(data?.skillsName)?.value);
  });
}
mapSkillsName(skillsName: string[] | null): FormArray {
  const formArray = this.fb.array([]);
  skillsName?.forEach(skillsName => {
    formArray.push(this.fb.control(skillsName));
    console.log(skillsName);
    console.log(formArray);
  });
  this.skillsNameArr = skillsName;
  return formArray;
  // console.log(formArray);
}
mapToolsName(toolsName: string[] | null): FormArray {
  const formArray = this.fb.array([]);
  toolsName?.forEach(name => {
    formArray.push(this.fb.control(name));
    // this.toolsNameArr.push(name);
  });
  this.toolsNameArr = toolsName;
  return formArray;
}

addSkillsName() {
  // this.skillsNameArr.push(this.myForm.get('skillsName').value);
  // this.myForm.get('skillsName').setValue('');
}

addToolsName() {
  // this.toolsNameArr.push(this.myForm.get('toolsName').value);
  // this.myForm.get('toolsName').setValue('');
}

// removeSkillsName(skill: string): void {
//   console.log("skillsNameArr before:", this.skillsNameArr);
//   console.log("skillsNameArr skill :",skill);
//   const index = this.skillsNameArr.indexOf(skill);
//   if (index !== -1) {
//     this.skillsNameArr.splice(index, 1);
//     console.log("skillsNameArr after:", this.skillsNameArr);
//   }
// }
// removeSkillsName(skill: any): FormArray {
//   const index = this.skillsNameArr.indexOf(skill);
//   if (index !== -1) {
//     this.skillsNameArr.splice(index, 1);
//   }
//   const formArray = this.myForm.get('skillsName') as FormArray;
//   console.log("value: " +this.skillsNameArr);
//   // formArray.push(this.skillsNameArr);
//   formArray.push(this.fb.control(this.skillsNameArr));
//   console.log("skillValue"+this.skillsNameArr);
//   console.log("return of remove",formArray);
//   return formArray;
// }
// removeSkillsName(skill: any): FormArray {
//   const index = this.skillsNameArr.indexOf(skill);
//   if (index !== -1) {
//     this.skillsNameArr.splice(index, 1);
//   }
//   const formArray = this.myForm.get('skillsName') as FormArray;
//   console.log("value: " + this.skillsNameArr);
  
//   setTimeout(() => {
//     formArray.clear();
//     this.skillsNameArr.forEach((skill: any) => {
//       formArray.push(this.fb.control(skill));
//     });
//   });
  
//   console.log("skillValue" + this.skillsNameArr);
//   console.log("return of remove", formArray);
//   return formArray;
// }

removeSkillsName(skill: any): FormArray {
  const index = this.skillsNameArr.indexOf(skill);
  if (index !== -1) {
    this.skillsNameArr.splice(index, 1);
  }
  const formArray = this.myForm.get('skillsName') as FormArray;
  console.log("value: " + this.skillsNameArr);
  
  setTimeout(() => {
    formArray.clear();
    this.skillsNameArr.forEach((skill: any) => {
      formArray.push(this.fb.control(skill));
    });
  });
  
  console.log("skillValue" + this.skillsNameArr);
  console.log("return of remove", formArray);
  return formArray;
}





onEdit() {
  this.isReadOnly = false;
}

  
  onSubmit() {
    this.isReadOnly = false;
    const formValues = this.myForm.value;
    console.log(formValues);
    console.log(formValues.skillsName)
  
  }
}
