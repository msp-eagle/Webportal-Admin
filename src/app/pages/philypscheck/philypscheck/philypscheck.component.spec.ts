import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilypscheckComponent } from './philypscheck.component';

describe('PhilypscheckComponent', () => {
  let component: PhilypscheckComponent;
  let fixture: ComponentFixture<PhilypscheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilypscheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilypscheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
