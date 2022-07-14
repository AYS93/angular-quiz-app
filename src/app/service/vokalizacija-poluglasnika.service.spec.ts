import { TestBed } from '@angular/core/testing';

import { VokalizacijaPoluglasnikaService } from './vokalizacija-poluglasnika.service';

describe('VokalizacijaPoluglasnikaService', () => {
  let service: VokalizacijaPoluglasnikaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VokalizacijaPoluglasnikaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
