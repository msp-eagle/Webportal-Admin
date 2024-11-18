import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthdevComponent } from './authdev.component';

describe('AuthdevComponent', () => {
  let component: AuthdevComponent;
  let fixture: ComponentFixture<AuthdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthdevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
