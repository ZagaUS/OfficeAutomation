import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditnoteDashboardComponent } from './creditnote-dashboard.component';

describe('CreditnoteDashboardComponent', () => {
  let component: CreditnoteDashboardComponent;
  let fixture: ComponentFixture<CreditnoteDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditnoteDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditnoteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
