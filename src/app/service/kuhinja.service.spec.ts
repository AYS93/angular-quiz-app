import { TestBed } from '@angular/core/testing';

import { KuhinjaService } from './kuhinja.service';

describe('KuhinjaService', () => {
  let service: KuhinjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KuhinjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
