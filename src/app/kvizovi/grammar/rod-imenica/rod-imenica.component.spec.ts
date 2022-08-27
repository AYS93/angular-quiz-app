import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodImenicaComponent } from './rod-imenica.component';

describe('RodImenicaComponent', () => {
  let component: RodImenicaComponent;
  let fixture: ComponentFixture<RodImenicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodImenicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodImenicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
