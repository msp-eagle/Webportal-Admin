import { TestBed } from '@angular/core/testing';

import { RegistercenterService } from './registercenter.service';

describe('RegistercenterService', () => {
  let service: RegistercenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistercenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
