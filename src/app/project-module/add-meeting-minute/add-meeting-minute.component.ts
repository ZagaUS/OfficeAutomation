import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
    @Input() attendees: string[] = [];
    
    constructor(private route: Router,private fb: FormBuilder) {
      this.meetingForm = this.fb.group({
        employeeName: '',
        projectName: '',
        projectId: '',
        meetingMinutesId: '',
        date: '',
        startTime: '',
        endTime: '',
        meetingObjective: '',
        attendeesPresent: [[]],
        agenda: this.fb.array([
          this.fb.group({
            topic: '',
            timeTaken: '',
            presentedBy:'',
            description:''
          })
        ])
      });
    }
    onAttendeesChange(event: Event) {
      const input = event.target as HTMLInputElement;
      this.meetingForm.controls['attendeesPresent'].setValue(input.value.split(','));
    }
    
  
    get agendaItems() {
      return this.meetingForm.get('agenda') as FormArray;
    }
  
    addAgendaItem() {
      this.agendaItems.push(this.fb.group({
        topic: '',
        timeTaken: '',
            presentedBy:'',
            description:''
      }));
    }
    
  
    onSubmit() {
      console.log(this.meetingForm.value);
      alert("updated successfully");
      this.route.navigate(['meetingMinutes']);
    }

}
