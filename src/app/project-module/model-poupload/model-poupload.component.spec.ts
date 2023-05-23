import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPouploadComponent } from './model-poupload.component';

describe('ModelPouploadComponent', () => {
  let component: ModelPouploadComponent;
  let fixture: ComponentFixture<ModelPouploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPouploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelPouploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
