import { TestBed } from '@angular/core/testing';

import { AuthdevService } from './authdev.service';

describe('AuthdevService', () => {
  let service: AuthdevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthdevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
