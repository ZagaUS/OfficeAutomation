import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldailyweekComponent } from './modaldailyweek.component';

describe('ModaldailyweekComponent', () => {
  let component: ModaldailyweekComponent;
  let fixture: ComponentFixture<ModaldailyweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldailyweekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldailyweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
