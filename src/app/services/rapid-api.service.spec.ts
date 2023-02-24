import { TestBed } from '@angular/core/testing';

import { RapidAPIService } from './rapid-api.service';

describe('RapidAPIService', () => {
  let service: RapidAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapidAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
