import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersListComponent } from './careers-list.component';

describe('CareersListComponent', () => {
  let component: CareersListComponent;
  let fixture: ComponentFixture<CareersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
