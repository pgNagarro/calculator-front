import { TestBed } from '@angular/core/testing';

import { RiskcalcService } from './riskcalc.service';

describe('RiskcalcService', () => {
  let service: RiskcalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskcalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
