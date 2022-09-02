import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokazneZameniceComponent } from './pokazne-zamenice.component';

describe('PokazneZameniceComponent', () => {
  let component: PokazneZameniceComponent;
  let fixture: ComponentFixture<PokazneZameniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokazneZameniceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokazneZameniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
