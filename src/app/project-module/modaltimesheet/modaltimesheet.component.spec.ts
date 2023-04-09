import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltimesheetComponent } from './modaltimesheet.component';

describe('ModaltimesheetComponent', () => {
  let component: ModaltimesheetComponent;
  let fixture: ComponentFixture<ModaltimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaltimesheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaltimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
