import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface Attendees {
  name: string;
  organization: string;
}

@Component({
  selector: 'app-add-meeting-minute',
  templateUrl: './add-meeting-minute.component.html',
  styleUrls: ['./add-meeting-minute.component.scss']
})
export class AddMeetingMinuteComponent {
  meetingForm: FormGroup;
  attendeesPresentItems: FormArray;
  attendeesForm: FormGroup;
  projectId?: any = localStorage.getItem('projectId');
  projectName?: any = localStorage.getItem('projectName');

  constructor(private fb: FormBuilder,
    private router: Router,) {
    this.meetingForm = this.fb.group({
      employeeName: [''],
      projectName: [this.projectName],
      projectId: [this.projectId],
      meetingMinutesId: [''],
      date: [''],
      startTime: [''],
      endTime: [''],
      meetingObjective: [''],
      attendeesPresent: this.fb.array([this.createAttendee()]),
      agenda: this.fb.array([this.createAgendaItem()])
    });

    this.attendeesForm = this.fb.group({
      attendees: this.fb.array([])
    });

    this.attendeesPresentItems = this.meetingForm.get('attendeesPresent') as FormArray;
  }

  get agendaItems() {
    return this.meetingForm.get('agenda') as FormArray;
  }

  createAgendaItem(): FormGroup {
    return this.fb.group({
      topic: [''],
      timeTaken: [''],
      presentedBy: [''],
      description: ['']
    });
  }

  addAgendaItem(): void {
    this.agendaItems.push(this.createAgendaItem());
  }

  removeAgendaItem(index: number): void {
    this.agendaItems.removeAt(index);
  }

  get attendees() {
    return this.meetingForm.get('attendeesPresent') as FormArray;
  }

  addAttendee(): void {
    this.attendees.push(this.createAttendee());
  }

  createAttendee(): FormGroup {
    return this.fb.group({
      name: [''],
      organization: ['']
    });
  }

  removeAttendee(index: number): void {
    this.attendeesPresentItems.removeAt(index);
  }

  onSubmit() {
    const attendees = this.meetingForm.value.attendeesPresent.flatMap((attendee: Attendees) => {
      const names = attendee.name.split(',');
      const orgs = attendee.organization.split(',');
      return names.map((name: string, i: number) => ({ name: name.trim(), organization: orgs[i].trim() }));
    });
  
    const meetingFormValue = {
      employeeName: this.meetingForm.value.employeeName,
      projectName: this.meetingForm.value.projectName,
      projectId: this.meetingForm.value.projectId,
      meetingMinutesId: this.meetingForm.value.meetingMinutesId,
      date: this.meetingForm.value.date,
      startTime: this.meetingForm.value.startTime,
      endTime: this.meetingForm.value.endTime,
      meetingObjective: this.meetingForm.value.meetingObjective,
      attendeesPresent: attendees,
      agenda: this.meetingForm.value.agenda
    };
  
    console.log("finalOutput", meetingFormValue);
    alert("updated sucessfully");
    this.router.navigate(['meetingMinutes']);
  }
   
}