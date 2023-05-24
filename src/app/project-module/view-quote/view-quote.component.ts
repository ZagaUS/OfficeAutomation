import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServicesService } from 'src/app/base-api/api-services.service';


interface MyData {
  [key: string]: any;
}
@Component({
  selector: 'app-view-quote',
  templateUrl: './view-quote.component.html',
  styleUrls: ['./view-quote.component.scss']
})
export class ViewQuoteComponent {

   @Input()
  value?: any;
  // projectId?: any;
  projectId?: any = localStorage.getItem('projectId');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiServicesService
  ) {}

  editable = false;
  readonly = true;
  formData: { [key: string]: any } = {};

  data: MyData[] = [];

  ngOnInit(): void {
    // this.projectId = "41";
    this.api.getProjectDetails(this.projectId).subscribe((data) => {
      console.log('List of Quotes' + JSON.stringify(data));
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
    this.formData = { ...this.formData, [key]: value };
  }
  submitForm(formData: any) {
    const updatedData: { [key: string]: any } = {};
    Object.entries(this.data).forEach(([key, value]) => {
      updatedData[key] = formData.hasOwnProperty(key) ? formData[key] : value;
    });
    console.log(formData);
    console.log('updated data', updatedData);
    this.api.updateProjectDetails(updatedData).subscribe((data: any) => {
      console.log('data updated', data);
      alert('updated data successfully');
    });
  }
}
