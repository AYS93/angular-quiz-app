import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaNaukaAImaIOdukaKvizComponent } from './ima-nauka-a-ima-i-oduka-kviz.component';

describe('ImaNaukaAImaIOdukaKvizComponent', () => {
  let component: ImaNaukaAImaIOdukaKvizComponent;
  let fixture: ComponentFixture<ImaNaukaAImaIOdukaKvizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImaNaukaAImaIOdukaKvizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaNaukaAImaIOdukaKvizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
