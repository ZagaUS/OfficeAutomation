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
  // dailyClicked = false;
  // externalClicked=false;
  // hideDailyFields?:any;
  // hideExternalFields?: any;
  // dailyFields = ['task1','task2']
  showDaily = false;
  showExternal = false;
  task1?: string;
  task2?: string;
  task3?: string;
  task4?: string;
  
  close() {
    const closeMessage = 'Modal closed'
    this.modalRef.close(closeMessage);
  }

  onClickDailySave()
  {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }
  onClickDaily() {
    this.showDaily = true;
    this.showExternal = false;
    // this.dailyClicked = true;
    // this.hideExternalFields=true;
    // const closeMessage = 'Modal closed';
    // this.modalRef.close(closeMessage);
    // this.router.navigate([
    //     '/dailytimesheet'
    //   ]);
  }
  onClickExternalSave()
  {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
  }
  onClickExternal() {
    this.showDaily = false;
    this.showExternal = true;
    // this.externalClicked = true;
    // this.hideDailyFields= true;
    // const closeMessage = 'Modal closed';
    // this.modalRef.close(closeMessage);
    // this.router.navigate([
    //   '/weeklytimesheet'
    //     ]);
    // this.apiCall.sendMail(this.contactForm.value).subscribe((data:any) => {
    //   console.log(data);
    //   this.snackBar.open("Thank you for contacting us. We will get back to you soon!", "", {
    //     duration: this.durationInSeconds * 1000});
    //   this.contactForm.reset();
    // }, (error) => {
    //   console.log(error);
    // });
  }
  
}
