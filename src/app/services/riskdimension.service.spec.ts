import { TestBed } from '@angular/core/testing';

import { RiskdimensionService } from './riskdimension.service';

describe('RiskdimensionService', () => {
  let service: RiskdimensionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskdimensionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
