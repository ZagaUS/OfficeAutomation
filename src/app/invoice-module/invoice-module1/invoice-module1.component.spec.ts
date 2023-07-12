import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceModule1Component } from './invoice-module1.component';

describe('InvoiceModule1Component', () => {
  let component: InvoiceModule1Component;
  let fixture: ComponentFixture<InvoiceModule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceModule1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
