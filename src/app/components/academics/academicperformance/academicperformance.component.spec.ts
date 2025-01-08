import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicperformanceComponent } from './academicperformance.component';

describe('AcademicperformanceComponent', () => {
  let component: AcademicperformanceComponent;
  let fixture: ComponentFixture<AcademicperformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcademicperformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademicperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
