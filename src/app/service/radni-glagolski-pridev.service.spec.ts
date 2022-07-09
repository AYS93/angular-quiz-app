import { TestBed } from '@angular/core/testing';

import { RadniGlagolskiPridevService } from './radni-glagolski-pridev.service';

describe('RadniGlagolskiPridevService', () => {
  let service: RadniGlagolskiPridevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadniGlagolskiPridevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
