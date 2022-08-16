import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinonimiTurcizmiComponent } from './sinonimi-turcizmi.component';

describe('SinonimiTurcizmiComponent', () => {
  let component: SinonimiTurcizmiComponent;
  let fixture: ComponentFixture<SinonimiTurcizmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinonimiTurcizmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinonimiTurcizmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
