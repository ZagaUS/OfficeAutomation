import { Component, ViewChild } from '@angular/core';
import { MatRadioGroup } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA = [
  {
    candidateId: '1',
    candidateName: 'TESTUSER1',
    candidateEmail: 'ramu@gmail.com',
    workflowId: 1,
    workflowName: 'hiring process',
  },
  {
    candidateId: '2',
    candidateName: 'TESTUSER2',
    candidateEmail: 'ramu@gmail.com',
    workflowId: 2,
    workflowName: 'hiring process',
  },
];

// const ELEMENT_DATA2 = [
//   {
//     workflowId: 1,
//     workflowName: 'hiring process',
//   },
//   {

//   },
// ];

@Component({
  selector: 'app-hiring-pam-dashboard',
  templateUrl: './hiring-pam-dashboard.component.html',
  styleUrls: ['./hiring-pam-dashboard.component.scss'],
})
export class HiringPamDashboardComponent {
  @ViewChild(MatRadioGroup) radioGroup?: MatRadioGroup;
  // dataSource?: any;
  ELEMENT_DATA?: any[];
  dataSource?: any = new MatTableDataSource(ELEMENT_DATA);
  categories: string[] = ['Active', 'Completed', 'Cancelled'];
  displayedColumns: string[] = [
    'workflowId',
    'candidateId',
    'candidateName',
    'candidateEmail',
    'workflowName',
    'action',
  ];

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('filterValue', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilterForCategory() {
    const selectedValue = this.radioGroup?.value;
    if (selectedValue === 'All') {
      this.dataSource.filter = ''; // clear filter
    } else {
      console.log('applyFilterForCategory' + this.radioGroup?.value);
      this.dataSource.filter = selectedValue;
    }
  }
}
