import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringPamProcessesComponent } from './hiring-pam-processes.component';

describe('HiringPamProcessesComponent', () => {
  let component: HiringPamProcessesComponent;
  let fixture: ComponentFixture<HiringPamProcessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringPamProcessesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringPamProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
