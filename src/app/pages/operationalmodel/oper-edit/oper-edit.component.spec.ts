import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperEditComponent } from './oper-edit.component';

describe('OperEditComponent', () => {
  let component: OperEditComponent;
  let fixture: ComponentFixture<OperEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
