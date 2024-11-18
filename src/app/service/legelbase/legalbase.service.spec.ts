import { TestBed } from '@angular/core/testing';

import { LegalbaseService } from './legalbase.service';

describe('LegalbaseService', () => {
  let service: LegalbaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegalbaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
