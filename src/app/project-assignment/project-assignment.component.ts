import { Component } from '@angular/core';
import { ApiServicesService } from '../base-api/api-services.service';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-project-assignment',
  templateUrl: './project-assignment.component.html',
  styleUrls: ['./project-assignment.component.scss']
})
export class ProjectAssignmentComponent {
  selectedValue?: string;
  employeeList: any = [];
  selectedEmployeeData?:  any;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];



  constructor(private apiUrl: ApiServicesService,public modalRef: MdbModalRef<ProjectAssignmentComponent>) { }


  ngOnInit(): void {
    this.apiUrl.getInactiveEmployeeList().subscribe((data) => {
      console.log('List of Employees ' + JSON.stringify(data));
      this.employeeList = data;
    });
  }

  onSubmit() {
    console.log("Submit");
    const projectId = localStorage.getItem('projectId');
    console.log("Selected value " + this.selectedValue + " Project ID " + projectId);

    this.employeeList.forEach((element: any) => {
      element.employeeName === this.selectedValue ? this.selectedEmployeeData = element : null;
    });


    console.log("Selected Employee Data " + JSON.stringify(this.selectedEmployeeData));


    this.apiUrl.assignProjectToEmployee(projectId, this.selectedEmployeeData).subscribe((data:any) => {
      console.log("Data " + JSON.stringify(data));
      alert("Project Assigned Successfully");
      this.modalRef.close();
      window.location.reload();
    })


  }

}
