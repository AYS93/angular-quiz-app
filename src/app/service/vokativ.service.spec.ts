import { TestBed } from '@angular/core/testing';

import { VokativService } from './vokativ.service';

describe('VokativService', () => {
  let service: VokativService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VokativService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
