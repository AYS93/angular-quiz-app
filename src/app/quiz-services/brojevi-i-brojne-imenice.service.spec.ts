import { TestBed } from '@angular/core/testing';

import { BrojeviIBrojneImeniceService } from './brojevi-i-brojne-imenice.service';

describe('BrojeviIBrojneImeniceService', () => {
  let service: BrojeviIBrojneImeniceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrojeviIBrojneImeniceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
