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
  
  constructor(private fb: FormBuilder, private api: EmployeeApiService) { 
    
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
      console.log('List of Skills ' + JSON.stringify(data));

      
        
      this.myForm.patchValue({
        employeeId: data?.employeeId,
        employeeName: data?.employeeName,
        skillsName: data?.skillsName || [],
        toolsName: data?.toolsName || [],
        yearsOfExperience: data?.yearsOfExperience,
        compentencyLevel: data?.compentencyLevel
      });

      this.skillsNameArr.clear();
      this.toolsNameArr.clear();

      if (data?.skillsName) {
        data.skillsName.forEach((skill: any) => {
          this.skillsNameArr.push(this.fb.control(skill));
        });
      }

      if (data?.toolsName) {
        data.toolsName.forEach((tool: any) => {
          this.toolsNameArr.push(this.fb.control(tool));
        });
      }

    });
    
  }

  get skillsNameArr() {
    return this.myForm.get('skillsName') as FormArray;
  }

  get toolsNameArr() {
    return this.myForm.get('toolsName') as FormArray;
  }

  addSkill() {
    this.skillsNameArr.push(this.fb.control(''));
  }

  addTool() {
    this.toolsNameArr.push(this.fb.control(''));
  }

  mapSkillsName(skillsName: string[] | null): FormArray {
    const formArray = this.fb.array([]);
    if (skillsName) {
      skillsName.forEach((skill) => {
        formArray.push(this.fb.control(skill));
      });
    }
    return formArray;
  }
  
  mapToolsName(toolsName: string[] | null): FormArray {
    const formArray = this.fb.array([]);
    if (toolsName) {
      toolsName.forEach((tool) => {
        formArray.push(this.fb.control(tool));
      });
    }
    return formArray;
  }
  
  onEdit() {
    this.isReadOnly = false;
  }

  onSubmit() {
    this.isReadOnly = false;
    const skillValues = this.myForm.value;
    console.log('UpdatedSkillValues' ,skillValues)

    this.api.updateSkillDetails(skillValues).subscribe((data: any) => {
      console.log('Updated Skills ' + JSON.stringify(data));
      alert('updated successfully');
      window.location.reload();
    });

  }

}
