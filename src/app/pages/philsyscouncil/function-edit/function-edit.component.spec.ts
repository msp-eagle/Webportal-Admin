import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionEditComponent } from './function-edit.component';

describe('FunctionEditComponent', () => {
  let component: FunctionEditComponent;
  let fixture: ComponentFixture<FunctionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
