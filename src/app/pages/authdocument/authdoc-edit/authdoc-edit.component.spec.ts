import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthdocEditComponent } from './authdoc-edit.component';

describe('AuthdocEditComponent', () => {
  let component: AuthdocEditComponent;
  let fixture: ComponentFixture<AuthdocEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthdocEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthdocEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
