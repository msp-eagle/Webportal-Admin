import { TestBed } from '@angular/core/testing';

import { AboutbriefService } from './aboutbrief.service';

describe('AboutbriefService', () => {
  let service: AboutbriefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutbriefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
