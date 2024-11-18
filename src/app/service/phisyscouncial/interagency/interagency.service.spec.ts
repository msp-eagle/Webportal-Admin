import { TestBed } from '@angular/core/testing';

import { InteragencyService } from './interagency.service';

describe('InteragencyService', () => {
  let service: InteragencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteragencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
