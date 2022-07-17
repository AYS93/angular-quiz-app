import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlagolJesamComponent } from './glagol-jesam.component';

describe('GlagolJesamComponent', () => {
  let component: GlagolJesamComponent;
  let fixture: ComponentFixture<GlagolJesamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlagolJesamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlagolJesamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
