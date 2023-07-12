import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSendComponent } from './model-send.component';

describe('ModelSendComponent', () => {
  let component: ModelSendComponent;
  let fixture: ComponentFixture<ModelSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelSendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
