import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuhinjaComponent } from './kuhinja.component';

describe('KuhinjaComponent', () => {
  let component: KuhinjaComponent;
  let fixture: ComponentFixture<KuhinjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KuhinjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KuhinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
