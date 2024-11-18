import { TestBed } from '@angular/core/testing';

import { RegistermyidService } from './registermyid.service';

describe('RegistermyidService', () => {
  let service: RegistermyidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistermyidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
