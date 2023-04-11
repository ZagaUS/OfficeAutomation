import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  @Input() title?: string;
  moduleInfo = [
    {
      cardName: 'Employee Onboarding',
      link: '**',
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
}
