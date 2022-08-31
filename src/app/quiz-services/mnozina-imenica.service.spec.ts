import { TestBed } from '@angular/core/testing';

import { MnozinaImenicaService } from './mnozina-imenica.service';

describe('MnozinaImenicaService', () => {
  let service: MnozinaImenicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MnozinaImenicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
