import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VokativComponent } from './vokativ.component';

describe('VokativComponent', () => {
  let component: VokativComponent;
  let fixture: ComponentFixture<VokativComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VokativComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VokativComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
