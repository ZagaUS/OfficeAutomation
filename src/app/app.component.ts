import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'office_automation';

  constructor(private router: Router, private location: Location) {}

  navigateToLandingPage() {
    this.router.navigate(['/landing']);
  }

  goBack() {
    this.location.back();
  }

}
