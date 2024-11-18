import { TestBed } from '@angular/core/testing';

import { BiodevService } from './biodev.service';

describe('BiodevService', () => {
  let service: BiodevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiodevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
