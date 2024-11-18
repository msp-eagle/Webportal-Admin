import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermyidUpdateComponent } from './registermyid-update.component';

describe('RegistermyidUpdateComponent', () => {
  let component: RegistermyidUpdateComponent;
  let fixture: ComponentFixture<RegistermyidUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistermyidUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistermyidUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
