import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDailytimesheetComponent } from './view-dailytimesheet.component';

describe('ViewDailytimesheetComponent', () => {
  let component: ViewDailytimesheetComponent;
  let fixture: ComponentFixture<ViewDailytimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDailytimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDailytimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
