import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modaldailyweek',
  templateUrl: './modaldailyweek.component.html',
  styleUrls: ['./modaldailyweek.component.scss']
})
export class ModaldailyweekComponent {

constructor(
  private router: Router, 
  public modalRef: MdbModalRef<ModaldailyweekComponent>){} 
  showDaily = false;
  showExternal = false;
  projectName ?: string;
  duration ?: string;
  description ?: string;
  date?: string;
  hours?: string;
  upload?: string;
  startDate?: string;
  endDate?: string;
 
  
  close() {
    const closeMessage = 'Modal closed'
    this.modalRef.close(closeMessage);
  }

  onClickDailySave()
  {
    const data = {
      projectName: this.projectName,
      duration: this.duration,
      description: this.description,
      date: this.date
    };
    console.log(data);
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }
  onClickDaily() {
    this.showDaily = true;
    this.showExternal = false;
  }
  onClickExternalSave()
  {
    const exdata = {
      upload: this.upload,
      hours: this.hours,
      startDate: this.startDate,
      endDate: this.endDate
    };
    console.log(exdata);
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }
  onClickExternal() {
    this.showDaily = false;
    this.showExternal = true;
   }
  
}
