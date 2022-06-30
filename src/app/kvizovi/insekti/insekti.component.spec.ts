import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsektiComponent } from './insekti.component';

describe('InsektiComponent', () => {
  let component: InsektiComponent;
  let fixture: ComponentFixture<InsektiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsektiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsektiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
