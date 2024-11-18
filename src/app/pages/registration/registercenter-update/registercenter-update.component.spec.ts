import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercenterUpdateComponent } from './registercenter-update.component';

describe('RegistercenterUpdateComponent', () => {
  let component: RegistercenterUpdateComponent;
  let fixture: ComponentFixture<RegistercenterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistercenterUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistercenterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
