import { TestBed } from '@angular/core/testing';

import { RiskscorelevelService } from './riskscorelevel.service';

describe('RiskscorelevelService', () => {
  let service: RiskscorelevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskscorelevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
