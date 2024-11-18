import { TestBed } from '@angular/core/testing';

import { Registersterp2Service } from './registersterp2.service';

describe('Registersterp2Service', () => {
  let service: Registersterp2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Registersterp2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
