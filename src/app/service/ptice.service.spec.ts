import { TestBed } from '@angular/core/testing';

import { PticeService } from './ptice.service';

describe('PticeService', () => {
  let service: PticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
