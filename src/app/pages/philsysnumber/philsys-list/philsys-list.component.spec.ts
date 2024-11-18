import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilsysListComponent } from './philsys-list.component';

describe('PhilsysListComponent', () => {
  let component: PhilsysListComponent;
  let fixture: ComponentFixture<PhilsysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilsysListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilsysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
