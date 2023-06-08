import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { EmployeeApiService } from 'src/app/base-api/employee-api.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipsModule } from '@angular/material/chips';
import { ModalResumeuploadComponent } from '../modal-resumeupload/modal-resumeupload.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})

export class CreateEmployeeComponent {
  myForm!: FormGroup;
  // separatorKeysCodes: number[] = [ENTER, COMMA];
  modalRef: MdbModalRef<ModalResumeuploadComponent> | null = null;

  constructor(private fb: FormBuilder, private api: EmployeeApiService, private modalService: MdbModalService) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      // employeeId: [''],
      employeeName: [''],
      employeeRole: [''],
      jobTitle: [''],
      dateOfJoining: [''],
      employeeEmail: [''],
      password: [''],
      department: [''],
      reportingManager: [''],
      employeeStatus: [''],
      overallExperience: [''],
      projectAssignmentStatus: [''],

      gender: [''],
      nationality: [''],
      maritalStatus: [''],
      language: this.fb.array([]),
      
      dateOfBirth: [''],
      bloodGroup: [''],
      personalEmail: [''],
      personalPhone: [''],
      emergencyPhone: [''],
      address: [''], 

      // educationDetails: this.fb.array([
      //   this.fb.group({
      //     collegeName: [''],
      //     degree: [''],
      //     specialization: [''],
      //     year: [''],
      //     graduate: ['']
      //   })
      // ]),

      educationDetails: this.fb.array([
        this.createEducationDetails()
      ]),

      // jobHistoryDetails: this.fb.array([
      //   this.fb.group({
      //     companyName: [''],
      //     startDate: [''],
      //     endDate: [''],
      //     field: [''],
      //     experience: ['']
      //   })
      // ]),

      jobHistoryDetails: this.fb.array([
        this.createJobHistory()
      ]),

      skillsName: this.fb.array([]),
      toolsName: this.fb.array([]),
      yearsOfExperience: [''],
      compentencyLevel: [''],

      allocatedLeave: [''],
      used: [''],
      balance: [''],

    });
  }
  educationData: any = [];

  get language(): FormArray {
    return this.myForm.get('language') as FormArray;
  }

  newLanguages(): FormControl {
    return this.fb.control('');
  }

  addLanguages(): void {
    this.language.push(this.newLanguages());
    console.log('added language', this.language);
  }

  removeLanguages(index: number): void {
    this.language.removeAt(index);
  }

  get educationDetails(): FormArray {
    return this.myForm.get('educationDetails') as FormArray;
  }

  createEducationDetails(): FormGroup {
    return this.fb.group({
      collegeName: [''],
      degree: [''],
      specialization: [''],
      year: [''],
      graduate: ['']
    });
  }

  addEducationDetails(): void {
    this.educationDetails.push(this.createEducationDetails());
    console.log('added educationDetails', this.educationDetails);
  }

  removeEducationDetails(index: number): void {
    this.educationDetails.removeAt(index);
  }


  // get jobHistory(): FormArray {
  //   return this.myForm.get('jobHistoryDetails') as FormArray;
  // }

  // newJobHistory(): FormControl {
  //   return this.fb.control('');
  // }

  // addJobHistory(): void {
  //   this.jobHistory.push(this.newJobHistory());
  //   console.log('added jobHistory', this.jobHistory);
  // }

  // removeJobHistory(index: number): void {
  //   this.jobHistory.removeAt(index);
  // }

  get jobHistoryDetails(): FormArray {
    return this.myForm.get('jobHistoryDetails') as FormArray;
  }

  createJobHistory(): FormGroup {
    return this.fb.group({
      companyName: [''],
      startDate: [''],
      endDate: [''],
      field: [''],
      experience: ['']
    });
  }

  addJobHistory(): void {
    this.jobHistoryDetails.push(this.createJobHistory());
    console.log('added jobHistoryDetails', this.jobHistoryDetails);
  }

  removeJobHistory(index: number): void {
    this.jobHistoryDetails.removeAt(index);
  }

  get skillsName(): FormArray {
    return this.myForm.get('skillsName') as FormArray;
  }

  newSkillsName(): FormControl {
    return this.fb.control('');
  }

  addSkillsName(): void {
    this.skillsName.push(this.newSkillsName());
    console.log('added skillsName', this.skillsName);
  }

  removeSkillsName(index: number): void {
    this.skillsName.removeAt(index);
  }

  get toolsName(): FormArray {
    return this.myForm.get('toolsName') as FormArray;
  }

  newToolsName(): FormControl {
    return this.fb.control('');
  }

  addToolsName(): void {
    this.toolsName.push(this.newToolsName());
    console.log('added toolsName', this.toolsName); 
  }

  removeToolsName(index: number): void {
    this.toolsName.removeAt(index);
  }  
  
  onSubmit() {
    // const createEmployeeDetails = this.myForm.value;
    const employeeInfo = {
      "employeeName": this.myForm.value.employeeName,
      "employeeRole": this.myForm.value.employeeRole,
      "jobTitle": this.myForm.value.jobTitle,
      "dateOfJoining": this.myForm.value.dateOfJoining,
      "employeeEmail": this.myForm.value.employeeEmail,
      "password": this.myForm.value.password,
      "department": this.myForm.value.department,
      "reportingManager": this.myForm.value.reportingManager,
      "employeeStatus": this.myForm.value.employeeStatus,
      "overallExperience": this.myForm.value.overallExperience,
      "projectAssignmentStatus": this.myForm.value.projectAssignmentStatus
    }

    const personalInfo = {
      "employeeName": this.myForm.value.employeeName,
      "gender": this.myForm.value.gender,
      "nationality": this.myForm.value.nationality,
      "martialStatus": this.myForm.value.maritalStatus,
      "language": this.myForm.value.language,
      "dateOfBirth": this.myForm.value.dateOfBirth,
      "bloodGroup": this.myForm.value.bloodGroup,
      "personalEmail": this.myForm.value.personalEmail,
      "personalPhone": this.myForm.value.personalPhone,
      "emergencyPhone": this.myForm.value.emergencyPhone,
      "address": this.myForm.value.address
    }

    const skills = {
      "employeeName": this.myForm.value.employeeName,
      "skillsName": this.myForm.value.skillsName,
      "toolsName": this.myForm.value.toolsName,
      "yearsOfExperience": this.myForm.value.yearsOfExperience,
      "compentencyLevel": this.myForm.value.compentencyLevel
    }

    const dayOff = {
      "employeeName": this.myForm.value.employeeName,
      "allocatedLeave": this.myForm.value.allocatedLeave,
      "used": this.myForm.value.used,
      "balance": this.myForm.value.balance
    }
    
    const createEmployee = {
      employeeInfo: employeeInfo,
      personalInfo: personalInfo,
      // educationDetails: this.educationData,
      educationDetails: this.myForm.value.educationDetails,
      jobHistoryDetails: this.myForm.value.jobHistoryDetails,
      skills: skills,
      dayOff: dayOff
    }
    console.log("Dayoff data",dayOff);

    console.log("updatedData", createEmployee);
    
    this.api.createEmployee(createEmployee).subscribe((data: any) => {
      console.log('data updated', data);
      
        // alert(data.message);
      alert('Updated successfully');
    });
    
  }

  openPO() {
    this.modalRef = this.modalService.open(ModalResumeuploadComponent, {
      modalClass: 'modal-lg',
    });
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
      // window.location.reload();
    });
  }

}
