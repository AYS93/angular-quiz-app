import { TestBed } from '@angular/core/testing';

import { GlagolJesamService } from './glagol-jesam.service';

describe('GlagolJesamService', () => {
  let service: GlagolJesamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlagolJesamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
