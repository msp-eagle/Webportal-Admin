import { TestBed } from '@angular/core/testing';

import { Registerstep1Service } from './registerstep1.service';

describe('Registerstep1Service', () => {
  let service: Registerstep1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Registerstep1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
