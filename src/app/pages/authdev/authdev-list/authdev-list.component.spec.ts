import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthdevListComponent } from './authdev-list.component';

describe('AuthdevListComponent', () => {
  let component: AuthdevListComponent;
  let fixture: ComponentFixture<AuthdevListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthdevListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthdevListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
