import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresEditComponent } from './procedures-edit.component';

describe('ProceduresEditComponent', () => {
  let component: ProceduresEditComponent;
  let fixture: ComponentFixture<ProceduresEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduresEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceduresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
