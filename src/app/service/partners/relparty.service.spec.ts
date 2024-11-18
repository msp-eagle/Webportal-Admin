import { TestBed } from '@angular/core/testing';

import { RelpartyService } from './relparty.service';

describe('RelpartyService', () => {
  let service: RelpartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelpartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
