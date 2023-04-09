import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalinvoiceComponent } from './modalinvoice.component';

describe('ModalinvoiceComponent', () => {
  let component: ModalinvoiceComponent;
  let fixture: ComponentFixture<ModalinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
