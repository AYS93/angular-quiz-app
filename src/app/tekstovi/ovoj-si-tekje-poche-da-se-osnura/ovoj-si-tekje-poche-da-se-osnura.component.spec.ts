import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvojSiTekjePocheDaSeOsnuraComponent } from './ovoj-si-tekje-poche-da-se-osnura.component';

describe('OvojSiTekjePocheDaSeOsnuraComponent', () => {
  let component: OvojSiTekjePocheDaSeOsnuraComponent;
  let fixture: ComponentFixture<OvojSiTekjePocheDaSeOsnuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvojSiTekjePocheDaSeOsnuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvojSiTekjePocheDaSeOsnuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
