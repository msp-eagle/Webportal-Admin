import { TestBed } from '@angular/core/testing';

import { SupportdocumentService } from './supportdocument.service';

describe('SupportdocumentService', () => {
  let service: SupportdocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportdocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
