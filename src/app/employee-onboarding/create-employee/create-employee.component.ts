import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { EmployeeApiService } from 'src/app/base-api/employee-api.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipsModule } from '@angular/material/chips';
import { ModalResumeuploadComponent } from '../modal-resumeupload/modal-resumeupload.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import {Location} from '@angular/common';
import { formatDate } from '@angular/common';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})

export class CreateEmployeeComponent {
  myForm!: FormGroup;
  modalRef: MdbModalRef<ModalResumeuploadComponent> | null = null;
  dateFormat = 'yyyy-MM-dd';
  // dateOfJoining?: any = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  // dateOfJoiningOnly?:string;
  // endDate?: any = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  // startDate?: any = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
  constructor(private fb: FormBuilder, private api: EmployeeApiService, private modalService: MdbModalService, private location:Location) {
    this.createForm();
  }


  createForm() {
    
    this.myForm = this.fb.group({
      // employeeId: [''],
      employeeName: ['', Validators.required],
      employeeRole: ['', Validators.required],
      jobTitle: ['', Validators.required],
      dateOfJoining: [new Date(), Validators.required],
      employeeEmail: ['', [Validators.required, Validators.email]],
      password: [''],
      department: ['', Validators.required],
      reportingManager: [''],
      employeeStatus: ['Active', Validators.required],
      overallExperience: ['', Validators.required],
      projectAssignmentStatus: [false],

      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      language: this.fb.array([]),
      
      dateOfBirth: [new Date(), Validators.required],
      bloodGroup: ['', Validators.required],
      personalEmail: ['', [Validators.required, Validators.email]],
      personalPhone: ['', Validators.required],
      emergencyPhone: ['', Validators.required],
      address: ['', Validators.required], 

      educationDetails: this.fb.array([
        this.createEducationDetails()
      ]),

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

  get jobHistoryDetails(): FormArray {
    return this.myForm.get('jobHistoryDetails') as FormArray;
  }

  createJobHistory(): FormGroup {
    return this.fb.group({
      companyName: [''],
      startDate: [new Date()],
      endDate: [new Date()],
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


    const dateOfJoining = formatDate(
      this.myForm.value.dateOfJoining,
      this.dateFormat,
      'en-US'
    );

    const dateOfBirth = formatDate(
      this.myForm.value.dateOfBirth,
      this.dateFormat,
      "en-US"
    );

    
    const employeeInfo = {
      "employeeName": this.myForm.value.employeeName,
      "employeeRole": this.myForm.value.employeeRole,
      "jobTitle": this.myForm.value.jobTitle,
      "dateOfJoining": dateOfJoining,
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
      "dateOfBirth": dateOfBirth,
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
      educationDetails: this.myForm.value.educationDetails,
      jobHistoryDetails: this.myForm.value.jobHistoryDetails,
      skills: skills,
      dayOff: dayOff
    }
    console.log("Dayoff data",dayOff);

    console.log("updatedData", createEmployee);

    if (this.myForm.invalid) {
      alert('Please fill in all required fields.');
      return;
    }
    
    this.api.createEmployee(createEmployee).subscribe((data: any) => {
      console.log('data updated', data);

      alert('Updated successfully');
      this.location.back();
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
