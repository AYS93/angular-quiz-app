import { TestBed } from '@angular/core/testing';

import { SinonimiMeseciUGodiniService } from './sinonimi-meseci-u-godini.service';

describe('SinonimiMeseciUGodiniService', () => {
  let service: SinonimiMeseciUGodiniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinonimiMeseciUGodiniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
