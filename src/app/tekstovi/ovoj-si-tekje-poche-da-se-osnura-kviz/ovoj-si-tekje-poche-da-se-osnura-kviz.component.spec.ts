import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvojSiTekjePocheDaSeOsnuraKvizComponent } from './ovoj-si-tekje-poche-da-se-osnura-kviz.component';

describe('OvojSiTekjePocheDaSeOsnuraKvizComponent', () => {
  let component: OvojSiTekjePocheDaSeOsnuraKvizComponent;
  let fixture: ComponentFixture<OvojSiTekjePocheDaSeOsnuraKvizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvojSiTekjePocheDaSeOsnuraKvizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvojSiTekjePocheDaSeOsnuraKvizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
