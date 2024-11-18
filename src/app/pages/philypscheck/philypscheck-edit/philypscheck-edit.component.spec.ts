import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilypscheckEditComponent } from './philypscheck-edit.component';

describe('PhilypscheckEditComponent', () => {
  let component: PhilypscheckEditComponent;
  let fixture: ComponentFixture<PhilypscheckEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilypscheckEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilypscheckEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
