import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectdetailsComponent } from './view-projectdetails.component';

describe('ViewProjectdetailsComponent', () => {
  let component: ViewProjectdetailsComponent;
  let fixture: ComponentFixture<ViewProjectdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProjectdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProjectdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
