import { TestBed } from '@angular/core/testing';

import { LjudskoTeloService } from './ljudsko-telo.service';

describe('LjudskoTeloService', () => {
  let service: LjudskoTeloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LjudskoTeloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
