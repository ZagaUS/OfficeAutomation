import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/base-api/api-services.service';

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
    employeeName?: string = 'anu';
    projectName?: string;
    projectId?: string;
    meetingMinutesId?: any = localStorage.getItem('meetingMinutesId');
    date?: string;
    startTime?: string;
    endTime?: string;
    meetingObjective?: string;
    attendeesPresent?: Attendees[];
    agenda?: Agenda[];

constructor(private router:Router,private api:ApiServicesService){

}

    
  
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
        { name: 'ari', organization: 'Developer' },
        { name: 'ari', organization: 'Designer' },
        { name: 'ari', organization: 'Project Manager' }
      ],
      agenda: [
        { topic: 'Review project schedule', timeTaken: '09:00-09:15', presentedBy: 'hari' , description:'worked'},
        { topic: 'Review project schedule', timeTaken: '09:00-09:15', presentedBy: 'hari' , description:'worked'},
        { topic: 'Review project schedule', timeTaken: '09:00-09:15', presentedBy: 'hari' , description:'worked'},
      ]
    };

    //api call to get data
    this.api.getMeetingMinutes(this.meetingMinutesId).subscribe((data) => {
      console.log(data.employeeName);
      this.meetingDetails = data;
    });
  console.log('meetingMinutesId',localStorage.getItem('meetingMinutesId'));
  console.log('MeetId',localStorage.getItem('meetingMinutesId'));
  }
  
}
  
