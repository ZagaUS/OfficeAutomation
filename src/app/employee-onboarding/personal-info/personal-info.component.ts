import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiServicesService } from 'src/app/base-api/api-services.service';
import { EmployeeApiService } from 'src/app/base-api/employee-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  myForm!: FormGroup;
  isReadOnly = true;
  read = true;
  pdfbaseapi?: any;  
  employeeId?: any = localStorage.getItem('employeeId');
  
  constructor(
    private api: EmployeeApiService,
    private location : Location,
    private fb: FormBuilder) { 
      this.myForm = this.fb.group({
        employeeId:[''],
        employeeName:[''], 
        gender:[''],
        nationality:[''],
        maritalStatus:[''], 
        language:[''], 
        dateOfBirth:[''],
        bloodGroup:[''], 
        personalEmail:[''], 
        personalPhone:[''],
        emergencyPhone:[''], 
        address:[''], 
});
    
}
ngOnInit() {
  this.api.getPersonalInfobyId(this.employeeId).subscribe((data) => {
    console.log('List of Personal Info ' + JSON.stringify(data));
    this.myForm.setValue(data);
  });

}  

onEdit() {
  this.isReadOnly = false;
}

viewPDF() {
  console.log('View PDF');
  // const document = {
  //   documentId: projectName + '_' + startDate + '_' + endDate,
  //   documentType: this.selectedValue == 'External' ? 'EXTERNAL' : 'WEEKLY',
  // };
  this.api.getPersonalInfobyId(this.employeeId).subscribe((data: any) => {
    // console.log('weekly pdf view clixked ' + data);
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const base64Data = dataUrl.split(',')[1];
      const binaryData = window.atob(base64Data);
      console.log(binaryData);
      this.pdfbaseapi = binaryData;
      //decode the base64 encoded string
      const binaryString = window.atob(this.pdfbaseapi);
      const byteArray = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        byteArray[i] = binaryString.charCodeAt(i);
      }
      // Create a Blob object from the Uint8Array
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      //Create a url
      const fileUrl = URL.createObjectURL(blob);
      window.open(fileUrl, '_blank');
    };
    reader.readAsDataURL(data);
  });
}


  
  onSubmit() {
    this.isReadOnly = false;
    const PersonalValues = this.myForm.value;
    console.log(PersonalValues);
    console.log("Personal infoo",PersonalValues);
    this.api.updatePersonalValues(PersonalValues).subscribe((data:any) => {
    });

    alert('updated successfully');
    window.location.reload();
    this.location.back();
  }
  }
