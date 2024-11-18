import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercenterListComponent } from './registercenter-list.component';

describe('RegistercenterListComponent', () => {
  let component: RegistercenterListComponent;
  let fixture: ComponentFixture<RegistercenterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistercenterListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistercenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
