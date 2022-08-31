import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnozinaImenicaComponent } from './mnozina-imenica.component';

describe('MnozinaImenicaComponent', () => {
  let component: MnozinaImenicaComponent;
  let fixture: ComponentFixture<MnozinaImenicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnozinaImenicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MnozinaImenicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
