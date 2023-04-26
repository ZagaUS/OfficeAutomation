import { Component } from '@angular/core';

export interface Agenda {
  item: string;
  time: string;
}
export interface Attendees {
  name: string;
  role: string;
}


@Component({
  selector: 'app-view-meeting-minutes',
  templateUrl: './view-meeting-minutes.component.html',
  styleUrls: ['./view-meeting-minutes.component.scss']
})
export class ViewMeetingMinutesComponent {
  meetingDetails?:any;
    employeeName?: string;
    projectName?: string;
    projectId?: string;
    meetingMinutesId?: string;
    date?: string;
    startTime?: string;
    endTime?: string;
    meetingObjective?: string;
    attendeesPresent?: Attendees[];
    agenda?: Agenda[];


  
  
  ngOnInit() {
    this.meetingDetails = {
      employeeName: 'Anushiya',
      projectName: 'DIGI-TEL',
      projectId: '12345',
      meetingMinutesId: '67890',
      date: '2023-04-26',
      startTime: '09:00',
      endTime: '10:00',
      meetingObjective: 'Discuss project status',
      attendeesPresent: [
        { name: 'ari', role: 'Developer' },
        { name: 'ari', role: 'Designer' },
        { name: 'ari', role: 'Project Manager' }
      ],
      agenda: [
        { item: 'Review project schedule', time: '09:00-09:15' },
        { item: 'Demo new features', time: '09:15-09:45' },
        { item: 'Discuss project risks', time: '09:45-10:00' }
      ]
    };
  }
}
  
