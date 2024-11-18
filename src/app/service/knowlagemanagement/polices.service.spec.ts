import { TestBed } from '@angular/core/testing';

import { PolicesService } from './polices.service';

describe('PolicesService', () => {
  let service: PolicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
