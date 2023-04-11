import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServicesService } from 'src/app/base-api/api-services.service';


interface MyData {
  [key: string]: any;
}


@Component({
  selector: 'app-view-projectdetails',
  templateUrl: './view-projectdetails.component.html',
  styleUrls: ['./view-projectdetails.component.scss'],
})
export class ViewProjectdetailsComponent {
  @Input()
  value?: any;
  // projectId?: any;
  projectId?: any = localStorage.getItem('projectId');

  constructor(private route: ActivatedRoute, private router: Router,private api: ApiServicesService) {}

  editable = false;
  readonly = true;
  formData: {[key: string]: any} = {};
 
  // data = [
  //   {
  //     'Client Address': '123 Main Street',
  //     'Client Country': 'india',
  //     'Client Currency': 'usd',
  //     'Client Email': 'user@redhat.com',
  //     'Client Name': 'redhat',
  //     'Client Timezone': 'est',
  //     Date: '2023-04-06',
  //     Duration: '2 hours',
  //     'Employee Email': 'anu@redhat.com',
  //     'Employee ID': '1',
  //     'Employee Name': 'anu',
  //     'Employee Number': 'emp1',
  //     'Employee Role': 'Senior consultant',
  //     'End Date': '2023-04-08',
  //     From: 'Kovilpatti',
  //     PA: 'abc123',
  //     PO: 'def132',
  //     'Project Assignment Status': true,
  //     'Project ID': '24',
  //     'Project Manager': 'Asha',
  //     'Project Name': 'DIGI',
  //     'Project Type': 'Active',
  //     Quantity: '10',
  //     'Quote ID': 'q1',
  //     'Quote Status': 'Approved',
  //     'Service Description': 'Pam and dmn',
  //     SFDC: 'sf1234',
  //     'Start Date': '2023-04-07',
  //     To: 'MAlaysia',
  //     'Total Amount': '1000',
  //     'Unit Price': '100',
  //     'Valid Date': '2023-04-30',
  //   },
  // ];


	  data: MyData[] = [];

  ngOnInit(): void {
    // this.projectId = "41";
    this.api.getProjectDetails(this.projectId).subscribe((data) => {
      console.log('List of projects ' + JSON.stringify(data));
      this.data = data;
    });
  }

  edit() {
    console.log('editable');
    this.editable = !this.editable;
    this.readonly = !this.readonly;
    this.editable = true;
  }
  
  updateFormData(key: string, value: any) {
    this.formData = {...this.formData, [key]: value};
  }
  submitForm(formData: any) {
    const updatedData: {[key: string]: any} = {};
    Object.entries(this.data).forEach(([key, value]) => {
      updatedData[key] = formData.hasOwnProperty(key) ? formData[key] : value;
    });
    console.log(formData);
    console.log("updated data",updatedData);
      this.api.updateProjectDetails(updatedData).subscribe((data:any) => {
      console.log("data updated",data);
    });
  }
}
