import { TestBed } from '@angular/core/testing';

import { DaniUNedeljiService } from './dani-u-nedelji.service';

describe('DaniUNedeljiService', () => {
  let service: DaniUNedeljiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaniUNedeljiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
