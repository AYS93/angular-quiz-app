import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PticeComponent } from './ptice.component';

describe('PticeComponent', () => {
  let component: PticeComponent;
  let fixture: ComponentFixture<PticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
