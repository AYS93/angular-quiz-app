import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadniGlagolskiPridevComponent } from './radni-glagolski-pridev.component';

describe('RadniGlagolskiPridevComponent', () => {
  let component: RadniGlagolskiPridevComponent;
  let fixture: ComponentFixture<RadniGlagolskiPridevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadniGlagolskiPridevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadniGlagolskiPridevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
