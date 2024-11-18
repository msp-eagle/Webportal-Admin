import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthdocumentComponent } from './authdocument.component';

describe('AuthdocumentComponent', () => {
  let component: AuthdocumentComponent;
  let fixture: ComponentFixture<AuthdocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthdocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
