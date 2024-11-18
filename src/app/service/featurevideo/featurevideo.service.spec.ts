import { TestBed } from '@angular/core/testing';

import { FeaturevideoService } from './featurevideo.service';

describe('FeaturevideoService', () => {
  let service: FeaturevideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturevideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
