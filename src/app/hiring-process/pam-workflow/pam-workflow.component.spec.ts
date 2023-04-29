import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PamWorkflowComponent } from './pam-workflow.component';

describe('PamWorkflowComponent', () => {
  let component: PamWorkflowComponent;
  let fixture: ComponentFixture<PamWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PamWorkflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PamWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
