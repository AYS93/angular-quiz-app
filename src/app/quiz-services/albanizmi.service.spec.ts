import { TestBed } from '@angular/core/testing';

import { AlbanizmiService } from './albanizmi.service';

describe('AlbanizmiService', () => {
  let service: AlbanizmiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbanizmiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
