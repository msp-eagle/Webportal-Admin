import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthdocListComponent } from './authdoc-list.component';

describe('AuthdocListComponent', () => {
  let component: AuthdocListComponent;
  let fixture: ComponentFixture<AuthdocListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthdocListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthdocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
