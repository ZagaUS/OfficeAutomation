import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrackHiringWorkflowComponent } from './view-track-hiring-workflow.component';

describe('ViewTrackHiringWorkflowComponent', () => {
  let component: ViewTrackHiringWorkflowComponent;
  let fixture: ComponentFixture<ViewTrackHiringWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTrackHiringWorkflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTrackHiringWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
