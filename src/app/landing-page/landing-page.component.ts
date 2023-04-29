import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  @Input() title?: string;
  moduleInfo = [
    {
      cardName: 'Hiring Process',
      link: '/hiringProcess',
    },
    {
      cardName: 'Employee Onboarding',
      link: '/employeedashboard',
    },
    {
      cardName: 'Project Management',
      link: '/projectdashboard',
    },
    {
      cardName: 'Invoice Management',
      link: '/invoicedashboard',
    },
  ];

  constructor(private router: Router) {}

  openBox(link: string) {
    // window.open(window.location.pathname + '/projectdashboard');
    this.router.navigate([]).then((result) => {
      window.open(`${link}`, '_blank');
    });
  }
}
