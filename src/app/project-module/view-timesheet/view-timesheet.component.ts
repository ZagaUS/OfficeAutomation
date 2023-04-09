import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModaltimesheetComponent } from '../modaltimesheet/modaltimesheet.component';
import { ModalinvoiceComponent } from '../modalinvoice/modalinvoice.component';
import { ModaldailyweekComponent } from '../modaldailyweek/modaldailyweek.component';

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
  selector: 'app-view-timesheet',
  templateUrl: './view-timesheet.component.html',
  styleUrls: ['./view-timesheet.component.scss'],
})
export class ViewTimesheetComponent {
  @ViewChild(MatRadioGroup) radioGroup?: MatRadioGroup;
  contactForm: FormGroup;
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

  constructor(private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private modalService: MdbModalService,
    ) { 
      this.contactForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      projectName: ['', Validators.required]
    });
  }
  durationInSeconds = 5;
   modalRef: MdbModalRef<ModaltimesheetComponent> | null = null;
   modalRefI:MdbModalRef<ModalinvoiceComponent> | null = null;

  openTimeModal() {
    this.modalRef = this.modalService.open(ModaltimesheetComponent,{
      modalClass: 'modal-lg', 
    });
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }

  openInvoiceModal() {
    this.modalRef = this.modalService.open(ModalinvoiceComponent,{
      modalClass: 'modal-lg',
    });
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }

  opendailyWeekModal()
  {
    this.modalRef = this.modalService.open(ModaldailyweekComponent,{
      modalClass: 'modal-lg',
     });
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }
  
  onSubmit() {
    console.log(this.contactForm.value);
    // this.apiCall.sendMail(this.contactForm.value).subscribe((data:any) => {
    //   console.log(data);
    //   this.snackBar.open("Thank you for contacting us. We will get back to you soon!", "", {
    //     duration: this.durationInSeconds * 1000});
    //   this.contactForm.reset();
    // }, (error) => {
    //   console.log(error);
    // });
  }

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
