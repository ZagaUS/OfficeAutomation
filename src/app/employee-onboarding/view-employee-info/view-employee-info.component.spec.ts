import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeInfoComponent } from './view-employee-info.component';

describe('ViewEmployeeInfoComponent', () => {
  let component: ViewEmployeeInfoComponent;
  let fixture: ComponentFixture<ViewEmployeeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
