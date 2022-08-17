import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbanizmiComponent } from './albanizmi.component';

describe('AlbanizmiComponent', () => {
  let component: AlbanizmiComponent;
  let fixture: ComponentFixture<AlbanizmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbanizmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbanizmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
