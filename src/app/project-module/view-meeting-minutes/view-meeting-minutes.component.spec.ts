import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMeetingMinutesComponent } from './view-meeting-minutes.component';

describe('ViewMeetingMinutesComponent', () => {
  let component: ViewMeetingMinutesComponent;
  let fixture: ComponentFixture<ViewMeetingMinutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMeetingMinutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMeetingMinutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
