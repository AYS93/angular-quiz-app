import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefleksiSonantnogLComponent } from './refleksi-sonantnog-l.component';

describe('RefleksiSonantnogLComponent', () => {
  let component: RefleksiSonantnogLComponent;
  let fixture: ComponentFixture<RefleksiSonantnogLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefleksiSonantnogLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefleksiSonantnogLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
