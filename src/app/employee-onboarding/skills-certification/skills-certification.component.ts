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
  addingNewSkill = false;
  addingNewTool  = false;
  
  
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

addSkillsName(skillsName: string) {
  // this.skillsNameArr.push(this.myForm.get('skillsName').value);
  // this.myForm.get('skillsName').setValue('');
  console.log("added Skill",skillsName);
  this.addingNewSkill=true;
  if (skillsName) {
    this.skillsNameArr.push(skillsName);
    this.myForm.get('skillsNameArr')?.setValue(this.skillsNameArr);
    console.log("added",this.skillsNameArr);    
  }
}

  


addToolsName(toolsName:string){
  console.log("added Skill",toolsName);
  this.addingNewSkill=true;
  if (toolsName) {
    this.skillsNameArr.push(toolsName);
    this.myForm.get('toolsNameArr')?.setValue(this.toolsNameArr);
    console.log("added",this.toolsNameArr);    
  }
}

removeSkillsName(skill: any): void {
  const index = this.skillsNameArr.indexOf(skill);
  if (index !== -1) {
    this.skillsNameArr.splice(index, 1);
  }
  const formArray = this.myForm.get('skillsNameArr') as FormArray;
  if (formArray) { // check if formArray is not null or undefined
    setTimeout(() => {
      formArray.clear();
      this.skillsNameArr.forEach((skill: any) => {
        formArray.push(this.fb.control(skill));
      });
      this.myForm.get('skillsNameArr')?.setValue(this.skillsNameArr);
    });
  

  // return formArray;
}
}

removeToolsName(tool:any){
  const index = this.toolsNameArr.indexOf(tool);
  if (index !== -1) {
    this.toolsNameArr.splice(index, 1);
  }
  const formArray = this.myForm.get('toolsNameArr') as FormArray;
  if (formArray) { // check if formArray is not null or undefined
    setTimeout(() => {
      formArray.clear();
      this.toolsNameArr.forEach((tool: any) => {
        formArray.push(this.fb.control(tool));
      });
      this.myForm.get('toolsNameArr')?.setValue(this.toolsNameArr);
    });
  

  // return formArray;
}
}

onEdit() {
  this.isReadOnly = false;
}

  
  onSubmit() {
    this.isReadOnly = false;
    const formValues = this.myForm.value;
    console.log(formValues);
    console.log(formValues.skillsName)
    // alert('updated successfully');  
  }
}
