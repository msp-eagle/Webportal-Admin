import { TestBed } from '@angular/core/testing';

import { PhilsysnumberService } from './philsysnumber.service';

describe('PhilsysnumberService', () => {
  let service: PhilsysnumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhilsysnumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
