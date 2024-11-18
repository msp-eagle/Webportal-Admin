import { TestBed } from '@angular/core/testing';

import { AuthdocsService } from './authdocs.service';

describe('AuthdocsService', () => {
  let service: AuthdocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthdocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
