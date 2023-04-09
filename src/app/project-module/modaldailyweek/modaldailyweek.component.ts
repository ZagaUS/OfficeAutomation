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
  
  close() {
    const closeMessage = 'Modal closed'
    this.modalRef.close(closeMessage);
  }

  onClickDaily() {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
    this.router.navigate([
        '/dailytimesheet'
      ]);

    // this.apiCall.sendMail(this.contactForm.value).subscribe((data:any) => {
    //   console.log(data);
    //   this.snackBar.open("Thank you for contacting us. We will get back to you soon!", "", {
    //     duration: this.durationInSeconds * 1000});
    //   this.contactForm.reset();
    // }, (error) => {
    //   console.log(error);
    // });
  }

  onClickWeekly() {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage);
    this.router.navigate([
      '/weeklytimesheet'
        ]);
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
