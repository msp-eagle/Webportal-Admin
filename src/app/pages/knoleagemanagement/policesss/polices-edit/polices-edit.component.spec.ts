import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicesEditComponent } from './polices-edit.component';

describe('PolicesEditComponent', () => {
  let component: PolicesEditComponent;
  let fixture: ComponentFixture<PolicesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
