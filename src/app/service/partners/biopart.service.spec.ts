import { TestBed } from '@angular/core/testing';

import { BiopartService } from './biopart.service';

describe('BiopartService', () => {
  let service: BiopartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiopartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
