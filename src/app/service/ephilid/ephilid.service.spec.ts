import { TestBed } from '@angular/core/testing';

import { EphilidService } from './ephilid.service';

describe('EphilidService', () => {
  let service: EphilidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EphilidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
