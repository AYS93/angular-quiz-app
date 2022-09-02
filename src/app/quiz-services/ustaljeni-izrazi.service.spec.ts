import { TestBed } from '@angular/core/testing';

import { UstaljeniIzraziService } from './ustaljeni-izrazi.service';

describe('UstaljeniIzraziService', () => {
  let service: UstaljeniIzraziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UstaljeniIzraziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
