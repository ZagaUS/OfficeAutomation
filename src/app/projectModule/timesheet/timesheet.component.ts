import { Component, ViewChild } from '@angular/core';
import { MatRadioGroup } from '@angular/material/radio';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  timesheetId: string;
  projectName: String;
  timesheetStatus: String;
  startDate: String;
  endDate: String;
  timesheetType: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    timesheetId: '1',
    projectName: 'Citi',
    timesheetStatus: 'Approved',
    startDate: 'Feb 1, 2023',
    endDate: 'Feb 7, 2023',
    timesheetType: 'Daily',
  },
  {
    timesheetId: '2',
    projectName: 'Citi',
    timesheetStatus: '',
    startDate: 'Feb 1, 2023',
    endDate: 'Feb 7, 2023',
    timesheetType: 'Weekly',
  },
  {
    timesheetId: '3',
    projectName: 'Citi',
    timesheetStatus: '',
    startDate: 'Feb 1, 2023',
    endDate: 'Feb 7, 2023',
    timesheetType: 'Weekly',
  },
  {
    timesheetId: '4',
    projectName: 'Citi',
    timesheetStatus: '',
    startDate: 'Feb 1, 2023',
    endDate: 'Feb 7, 2023',
    timesheetType: 'Weekly',
  },
];

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
})
export class TimesheetComponent {
  @ViewChild(MatRadioGroup) radioGroup?: MatRadioGroup;

  categories: string[] = ['Approved', 'All'];
  displayedColumns: string[] = [
    'timesheetId',
    'projectName',
    'timesheetStatus',
    'startDate',
    'endDate',
    'timesheetType',
    'actions',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private router: Router) {}

  // ngOnInit(): void {
  //   console.log("Im'in");
  //   this.dataSource.filter = this.selectedCategory;
  // }

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

  viewProject() {
    // this.router.navigate([
    //   '/projectDetails',
    //   this.dataSource.data[0].projectId,
    // ]);
  }

  test() {
    alert('test');
    console.log('test');
  }
}
