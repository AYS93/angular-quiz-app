import { TestBed } from '@angular/core/testing';

import { SinonimiTurcizmiService } from './sinonimi-turcizmi.service';

describe('SinonimiTurcizmiService', () => {
  let service: SinonimiTurcizmiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinonimiTurcizmiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
