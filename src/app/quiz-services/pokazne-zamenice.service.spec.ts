import { TestBed } from '@angular/core/testing';

import { PokazneZameniceService } from './pokazne-zamenice.service';

describe('PokazneZameniceService', () => {
  let service: PokazneZameniceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokazneZameniceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
