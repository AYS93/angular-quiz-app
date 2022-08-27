import { TestBed } from '@angular/core/testing';

import { RodImenicaService } from './rod-imenica.service';

describe('RodImenicaService', () => {
  let service: RodImenicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RodImenicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
