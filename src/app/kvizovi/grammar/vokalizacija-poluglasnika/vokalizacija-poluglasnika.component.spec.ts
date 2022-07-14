import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VokalizacijaPoluglasnikaComponent } from './vokalizacija-poluglasnika.component';

describe('VokalizacijaPoluglasnikaComponent', () => {
  let component: VokalizacijaPoluglasnikaComponent;
  let fixture: ComponentFixture<VokalizacijaPoluglasnikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VokalizacijaPoluglasnikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VokalizacijaPoluglasnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
