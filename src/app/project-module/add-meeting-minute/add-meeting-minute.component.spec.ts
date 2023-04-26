import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeetingMinuteComponent } from './add-meeting-minute.component';

describe('AddMeetingMinuteComponent', () => {
  let component: AddMeetingMinuteComponent;
  let fixture: ComponentFixture<AddMeetingMinuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMeetingMinuteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMeetingMinuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
