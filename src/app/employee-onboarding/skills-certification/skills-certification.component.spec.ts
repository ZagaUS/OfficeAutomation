import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCertificationComponent } from './skills-certification.component';

describe('SkillsCertificationComponent', () => {
  let component: SkillsCertificationComponent;
  let fixture: ComponentFixture<SkillsCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCertificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
