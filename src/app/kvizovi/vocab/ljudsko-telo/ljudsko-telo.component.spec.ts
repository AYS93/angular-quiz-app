import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LjudskoTeloComponent } from './ljudsko-telo.component';

describe('LjudskoTeloComponent', () => {
  let component: LjudskoTeloComponent;
  let fixture: ComponentFixture<LjudskoTeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LjudskoTeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LjudskoTeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
