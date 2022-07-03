import { TestBed } from '@angular/core/testing';

import { RefleksiSonantnogLService } from './refleksi-sonantnog-l.service';

describe('RefleksiSonantnogLService', () => {
  let service: RefleksiSonantnogLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefleksiSonantnogLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
