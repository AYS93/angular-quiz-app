import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlogoS6mSeMuchilaKvizComponent } from './mlogo-s6m-se-muchila-kviz.component';

describe('MlogoS6mSeMuchilaKvizComponent', () => {
  let component: MlogoS6mSeMuchilaKvizComponent;
  let fixture: ComponentFixture<MlogoS6mSeMuchilaKvizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlogoS6mSeMuchilaKvizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlogoS6mSeMuchilaKvizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
