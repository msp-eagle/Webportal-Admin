import { TestBed } from '@angular/core/testing';

import { OperamodelService } from './operamodel.service';

describe('OperamodelService', () => {
  let service: OperamodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperamodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
