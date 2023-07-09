import { TestBed } from '@angular/core/testing';

import { AddscorecapService } from './addscorecap.service';

describe('AddscorecapService', () => {
  let service: AddscorecapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddscorecapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
