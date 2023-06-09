import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiServicesService } from 'src/app/base-api/api-services.service';

@Component({
  selector: 'app-edit-timesheet',
  templateUrl: './edit-timesheet.component.html',
  styleUrls: ['./edit-timesheet.component.scss'],
  animations: [
    trigger('tableAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        animate(
          '.5s ease-out',
          style({ opacity: 1, transform: 'translateY(0px)' })
        ),
      ]),
    ]),
  ],
})
export class EditTimesheetComponent {
  // timesheets?: any[];

  projectId?: any;
  employeeName?: any;
  projectName?: any;
  employeeRole?: any;
  weeklyTimesheetId?: any;
  duration?: any;
  startDate?: any;
  endDate?: any;
  dailyTimesheetId?: any;
  hours?: any;
  date?: any;
  supportTicket?: any;
  description?: any;
  timesheetType?: any;
  clientOwners?: any;
  redHatOwners?: any;
  weeklyTimesheetForm: FormGroup;
  projectDetail?: any = [];
  timesheets?: any = [];

  // projectDetail: any = [
  //   {
  //     projectId: 1,
  //     employeeName: 'Anushiya',
  //     projectName: 'Project 1',
  //     employeeRole: 'Developer',
  //     weeklyTimesheetId: 1,
  //     duration: 40,
  //     startDate: '2023-04-01',
  //     endDate: '2023-04-07',
  //   },
  // ];
  // {
  //   projectId: 2,
  //   employeeName: 'Hariharan',
  //   projectName: 'Project 2',
  //   employeeRole: 'Designer',
  //   weeklyTimesheetId: 2,
  //   duration: 20,
  //   startDate: '2023-04-01',
  //   endDate: '2023-04-07',
  // }
  //

  constructor(private fb: FormBuilder, private api: ApiServicesService) {
    this.weeklyTimesheetForm = this.fb.group({
      projectId: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.api
      .getWeeklyTimesheetDataByWeekId(localStorage.getItem('weeklyTimesheetId'))
      .subscribe((data) => {
        this.projectDetail.push(data);
        this.timesheets = data.timesheets;
        console.log('GET DATA' + JSON.stringify(data));
      });
  }

  // timesheets = [
  //   {
  //     dailyTimesheetId: 1,
  //     hours: 8,
  //     date: '2023-04-01',
  //     supportTicket: 'DEF-456',
  //     clientOwners: ['Client 3', 'Client 4'],
  //     redHatOwners: ['Red Hat 3', 'Red Hat 4'],
  //     description: 'Designed UI for feature Y',
  //     timesheetType: 'Non-Billable',
  //   },
  //   {
  //     dailyTimesheetId: 1,
  //     hours: 8,
  //     date: '2023-04-01',
  //     supportTicket: 'ABC-123',
  //     clientOwners: ['Client 1', 'Client 2'],
  //     redHatOwners: ['Red Hat 1', 'Red Hat 2'],
  //     description:
  //       'Worked on feature X for almost all the task are completed  worked with someone attende the meeting and also th details of the tasks are uodated ib thefd hagdhvbh',
  //     timesheetType: 'Billable',
  //   },
  //   {
  //     dailyTimesheetId: 1,
  //     hours: 8,
  //     date: '2023-04-01',
  //     supportTicket: 'ABC-123',
  //     clientOwners: ['Client 1', 'Client 2'],
  //     redHatOwners: ['Red Hat 1', 'Red Hat 2'],
  //     description:
  //       'Worked on feature X for almost all the task are completed  worked with someone attende the meeting and also th details of the tasks are uodated ib thefd hagdhvbh',
  //     timesheetType: 'Billable',
  //   },
  //   {
  //     dailyTimesheetId: 1,
  //     hours: 8,
  //     date: '2023-04-01',
  //     supportTicket: 'ABC-123',
  //     clientOwners: ['Client 1', 'Client 2'],
  //     redHatOwners: ['Red Hat 1', 'Red Hat 2'],
  //     description:
  //       'Worked on feature X for almost all the task are completed  worked with someone attende the meeting and also th details of the tasks are uodated ib thefd hagdhvbh',
  //     timesheetType: 'Billable',
  //   },
  // ];
  editedData: any[] = [];

  onCellEdit(event: any, timesheet: any, field: string, value?: any) {
    // console.log(field, value);
    const newValue = value ?? event.target.textContent.trim();
    const index = this.editedData.findIndex((data) => data.id === timesheet.id);
    if (index === -1) {
      this.editedData.push({ id: timesheet.id, [field]: newValue });

      console.log('NewValue+++++', newValue);
    } else {
      this.editedData[index][field] = newValue;
      console.log('NewValueelse----', newValue);
    }
    // this.timesheets.forEach((timesheet) => {
    //   if (timesheet.dailyTimesheetId === timesheet.dailyTimesheetId) {
    //     console.log('Timesheet' + event.target.textContent.split(','));
    //     timesheet.clientOwners.push(event.target.textContent);
    //   }
    // });
  }

  onEditInput() {
    console.log('Edit input');
  }

  onClickWeeklyUpdate() {
    console.log('NewValueform ', this.projectId);
    console.log('NewValueform ', this.projectDetail);
    console.log('NewValueform ', this.timesheets);
    this.api
      .updateWeeklyTimesheetData(this.projectDetail[0])
      .subscribe((data) => {
        this.projectDetail = [];
        this.projectDetail.push(data);
        this.timesheets = data.timesheets;
        console.log('GET DATA' + JSON.stringify(data));
        alert('Updated Successfully!');
      });
  }
}
