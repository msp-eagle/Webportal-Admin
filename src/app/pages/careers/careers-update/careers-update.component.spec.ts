import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersUpdateComponent } from './careers-update.component';

describe('CareersUpdateComponent', () => {
  let component: CareersUpdateComponent;
  let fixture: ComponentFixture<CareersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
