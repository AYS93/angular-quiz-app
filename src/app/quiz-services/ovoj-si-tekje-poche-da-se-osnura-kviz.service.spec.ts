import { TestBed } from '@angular/core/testing';

import { OvojSiTekjePocheDaSeOsnuraKvizService } from './ovoj-si-tekje-poche-da-se-osnura-kviz.service';

describe('OvojSiTekjePocheDaSeOsnuraKvizService', () => {
  let service: OvojSiTekjePocheDaSeOsnuraKvizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OvojSiTekjePocheDaSeOsnuraKvizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
