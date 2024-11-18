import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecaseEditComponent } from './usecase-edit.component';

describe('UsecaseEditComponent', () => {
  let component: UsecaseEditComponent;
  let fixture: ComponentFixture<UsecaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsecaseEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsecaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
