import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaniUNedeljiComponent } from './dani-u-nedelji.component';

describe('DaniUNedeljiComponent', () => {
  let component: DaniUNedeljiComponent;
  let fixture: ComponentFixture<DaniUNedeljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaniUNedeljiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaniUNedeljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
