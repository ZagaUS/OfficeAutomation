import { Component } from '@angular/core';
import { Location } from '@angular/common';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiServicesService } from 'src/app/base-api/api-services.service';

interface CurrencyData {
  country: string;
  currency: string;
  timezones: string[];
}

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent {
  myForm!: FormGroup;
  countryList: string[] = [];
  selectedCountry: string = '';
  selectedCurrency: string = '';
  selectedTimezones: string[] = [];
  jsonData: CurrencyData[] = [];

  constructor(private fb: FormBuilder, private api: ApiServicesService, private location: Location) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      clientEmail: ['', [Validators.required, Validators.email]],
      clientName: ['', Validators.required],
      clientAddress: ['', Validators.required],
      clientCountry: ['', Validators.required],
      clientCurrency: ['', Validators.required],
      clientTimezone: ['', Validators.required],
      employeeName: [''],
      employeeId: [''],
      employeeEmail: [''],
      employeeNumber: [''],
      employeeRole: [''],
      projectName: ['', Validators.required],
      projectId: [''],
      projectManager: ['', Validators.required],
      projectAssignmentStatus: ['false'],
      quoteId: [''],
      quoteStatus: [''],
      serviceDescription: [''],
      startDate: [''],
      endDate: [''],
      from: [''],
      to: [''],
      totalAmount: [''],
      unitPrice: [''],
      pa: [''],
      po: [''],
      sfdc: [''],
      validDate: [''],
      totalManDays: [''],
      duration: [''],
      poStatus: ['false'],
      quoteFlag: ['false'],
      date: [''],
      selectedCurrency: new FormControl(),
      selectedTimezone: new FormControl(),
    });
  }

  ngOnInit(): void {
    // this.projectId = "41";
    this.api.getDropDown().subscribe((jsonData) => {
      console.log('List of Drpdown ' + JSON.stringify(jsonData));

      this.countryList = jsonData.map(
        (data: { country: any; '': any }) => data.country
      );

      this.jsonData = jsonData;
    });
  }
  onSubmit() {
    const projectDetails = this.myForm.value;
    this.api.createProjectDetails(projectDetails).subscribe((data: any) => {
      console.log('data updated', data);
      alert('Updated successfully');
      // do something with the response, if needed
      this.location.back();
    });
  }

  onCountryChange(country: string): void {
    const selectedData = this.jsonData.find((data) => data.country === country);
    if (selectedData) {
      this.selectedCountry = selectedData.country;
      //this.selectedCurrency = selectedData.currency;
      this.myForm.get('clientCurrency')?.setValue(selectedData.currency);
      this.selectedTimezones = selectedData.timezones;
    }
  }
}
