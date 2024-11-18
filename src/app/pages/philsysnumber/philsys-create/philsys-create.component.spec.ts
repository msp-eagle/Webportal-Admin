import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilsysCreateComponent } from './philsys-create.component';

describe('PhilsysCreateComponent', () => {
  let component: PhilsysCreateComponent;
  let fixture: ComponentFixture<PhilsysCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilsysCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilsysCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
