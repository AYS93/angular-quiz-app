import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlogoS6mSeMuchilaComponent } from './mlogo-s6m-se-muchila.component';

describe('MlogoS6mSeMuchilaComponent', () => {
  let component: MlogoS6mSeMuchilaComponent;
  let fixture: ComponentFixture<MlogoS6mSeMuchilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlogoS6mSeMuchilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlogoS6mSeMuchilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
