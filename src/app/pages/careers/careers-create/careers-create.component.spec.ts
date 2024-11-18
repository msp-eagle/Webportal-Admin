import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersCreateComponent } from './careers-create.component';

describe('CareersCreateComponent', () => {
  let component: CareersCreateComponent;
  let fixture: ComponentFixture<CareersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
