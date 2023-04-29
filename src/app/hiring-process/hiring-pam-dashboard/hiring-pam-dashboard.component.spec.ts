import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringPamDashboardComponent } from './hiring-pam-dashboard.component';

describe('HiringPamDashboardComponent', () => {
  let component: HiringPamDashboardComponent;
  let fixture: ComponentFixture<HiringPamDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringPamDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringPamDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
