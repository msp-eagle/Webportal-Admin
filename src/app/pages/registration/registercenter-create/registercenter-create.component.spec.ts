import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercenterCreateComponent } from './registercenter-create.component';

describe('RegistercenterCreateComponent', () => {
  let component: RegistercenterCreateComponent;
  let fixture: ComponentFixture<RegistercenterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistercenterCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistercenterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
