import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinonimiMeseciUGodiniComponent } from './sinonimi-meseci-u-godini.component';

describe('SinonimiMeseciUGodiniComponent', () => {
  let component: SinonimiMeseciUGodiniComponent;
  let fixture: ComponentFixture<SinonimiMeseciUGodiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinonimiMeseciUGodiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinonimiMeseciUGodiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
