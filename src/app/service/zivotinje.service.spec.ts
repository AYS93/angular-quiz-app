import { TestBed } from '@angular/core/testing';

import { ZivotinjeService } from './zivotinje.service';

describe('ZivotinjeService', () => {
  let service: ZivotinjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZivotinjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
