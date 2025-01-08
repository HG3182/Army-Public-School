import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayhomeworkComponent } from './holidayhomework.component';

describe('HolidayhomeworkComponent', () => {
  let component: HolidayhomeworkComponent;
  let fixture: ComponentFixture<HolidayhomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolidayhomeworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HolidayhomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
