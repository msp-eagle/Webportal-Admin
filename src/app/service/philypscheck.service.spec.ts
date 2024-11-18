import { TestBed } from '@angular/core/testing';

import { PhilypscheckService } from './philypscheck.service';

describe('PhilypscheckService', () => {
  let service: PhilypscheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhilypscheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
