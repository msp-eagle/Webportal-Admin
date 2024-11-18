import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilsysUpdateComponent } from './philsys-update.component';

describe('PhilsysUpdateComponent', () => {
  let component: PhilsysUpdateComponent;
  let fixture: ComponentFixture<PhilsysUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilsysUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilsysUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
