import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindYourLanguageComponent } from './mind-your-language.component';

describe('MindYourLanguageComponent', () => {
  let component: MindYourLanguageComponent;
  let fixture: ComponentFixture<MindYourLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindYourLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MindYourLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
