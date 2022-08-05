import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaNaukaAImaIOdukaComponent } from './ima-nauka-a-ima-i-oduka.component';

describe('ImaNaukaAImaIOdukaComponent', () => {
  let component: ImaNaukaAImaIOdukaComponent;
  let fixture: ComponentFixture<ImaNaukaAImaIOdukaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImaNaukaAImaIOdukaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaNaukaAImaIOdukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
