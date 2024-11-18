import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteragenctEditComponent } from './interagenct-edit.component';

describe('InteragenctEditComponent', () => {
  let component: InteragenctEditComponent;
  let fixture: ComponentFixture<InteragenctEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteragenctEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteragenctEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
