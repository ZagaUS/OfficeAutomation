import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResumeuploadComponent } from './modal-resumeupload.component';

describe('ModalResumeuploadComponent', () => {
  let component: ModalResumeuploadComponent;
  let fixture: ComponentFixture<ModalResumeuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalResumeuploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalResumeuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
