import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'office_automation';

  constructor(private router: Router) {}

  navigateToLandingPage() {
    this.router.navigate(['/landing']);
  }

}
