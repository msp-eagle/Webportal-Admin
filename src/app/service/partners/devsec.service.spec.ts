import { TestBed } from '@angular/core/testing';

import { DevsecService } from './devsec.service';

describe('DevsecService', () => {
  let service: DevsecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevsecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
