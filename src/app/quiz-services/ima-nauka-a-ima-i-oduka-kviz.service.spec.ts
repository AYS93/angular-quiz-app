import { TestBed } from '@angular/core/testing';

import { ImaNaukaAImaIOdukaKvizService } from './ima-nauka-a-ima-i-oduka-kviz.service';

describe('ImaNaukaAImaIOdukaKvizService', () => {
  let service: ImaNaukaAImaIOdukaKvizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImaNaukaAImaIOdukaKvizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
