import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazniPrijateljiComponent } from './lazni-prijatelji.component';

describe('LazniPrijateljiComponent', () => {
  let component: LazniPrijateljiComponent;
  let fixture: ComponentFixture<LazniPrijateljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazniPrijateljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazniPrijateljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
