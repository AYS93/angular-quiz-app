import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstaljeniIzraziComponent } from './ustaljeni-izrazi.component';

describe('UstaljeniIzraziComponent', () => {
  let component: UstaljeniIzraziComponent;
  let fixture: ComponentFixture<UstaljeniIzraziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UstaljeniIzraziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UstaljeniIzraziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
