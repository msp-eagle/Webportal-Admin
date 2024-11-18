import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthdevEditComponent } from './authdev-edit.component';

describe('AuthdevEditComponent', () => {
  let component: AuthdevEditComponent;
  let fixture: ComponentFixture<AuthdevEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthdevEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthdevEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
