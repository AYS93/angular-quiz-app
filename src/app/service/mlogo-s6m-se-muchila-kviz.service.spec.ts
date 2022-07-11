import { TestBed } from '@angular/core/testing';

import { MlogoS6mSeMuchilaKvizService } from './mlogo-s6m-se-muchila-kviz.service';

describe('MlogoS6mSeMuchilaKvizService', () => {
  let service: MlogoS6mSeMuchilaKvizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlogoS6mSeMuchilaKvizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
