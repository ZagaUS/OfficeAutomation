import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiServicesService } from 'src/app/base-api/api-services.service';

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
  
  constructor(
    private apiCall: ApiServicesService,
    private fb: FormBuilder) { 
    
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

viewPDF() {
  console.log('View PDF');
  // const document = {
  //   documentId: projectName + '_' + startDate + '_' + endDate,
  //   documentType: this.selectedValue == 'External' ? 'EXTERNAL' : 'WEEKLY',
  // };
  this.apiCall.getweeklyTimesheetfile(document).subscribe((data: any) => {
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
    const formValues = this.myForm.value;
    console.log(formValues);

    }
  }
