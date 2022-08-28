import { TestBed } from '@angular/core/testing';

import { LazniPrijateljiService } from './lazni-prijatelji.service';

describe('LazniPrijateljiService', () => {
  let service: LazniPrijateljiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazniPrijateljiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
