import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrojeviIBrojneImeniceComponent } from './brojevi-i-brojne-imenice.component';

describe('BrojeviIBrojneImeniceComponent', () => {
  let component: BrojeviIBrojneImeniceComponent;
  let fixture: ComponentFixture<BrojeviIBrojneImeniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrojeviIBrojneImeniceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrojeviIBrojneImeniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
