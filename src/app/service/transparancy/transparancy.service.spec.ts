import { TestBed } from '@angular/core/testing';

import { TransparancyService } from './transparancy.service';

describe('TransparancyService', () => {
  let service: TransparancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransparancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
