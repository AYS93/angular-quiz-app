import { TestBed } from '@angular/core/testing';

import { InsektiService } from './insekti.service';

describe('InsektiService', () => {
  let service: InsektiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsektiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
