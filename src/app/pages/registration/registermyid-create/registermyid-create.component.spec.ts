import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermyidCreateComponent } from './registermyid-create.component';

describe('RegistermyidCreateComponent', () => {
  let component: RegistermyidCreateComponent;
  let fixture: ComponentFixture<RegistermyidCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistermyidCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistermyidCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
