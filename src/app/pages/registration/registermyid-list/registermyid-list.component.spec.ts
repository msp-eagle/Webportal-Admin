import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermyidListComponent } from './registermyid-list.component';

describe('RegistermyidListComponent', () => {
  let component: RegistermyidListComponent;
  let fixture: ComponentFixture<RegistermyidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistermyidListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistermyidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
