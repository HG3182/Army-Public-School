import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationscheduleComponent } from './examinationschedule.component';

describe('ExaminationscheduleComponent', () => {
  let component: ExaminationscheduleComponent;
  let fixture: ComponentFixture<ExaminationscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExaminationscheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExaminationscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
