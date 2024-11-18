import { TestBed } from '@angular/core/testing';

import { EphilfaqService } from './ephilfaq.service';

describe('EphilfaqService', () => {
  let service: EphilfaqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EphilfaqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
