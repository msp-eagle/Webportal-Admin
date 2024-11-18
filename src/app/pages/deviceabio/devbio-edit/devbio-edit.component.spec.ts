import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevbioEditComponent } from './devbio-edit.component';

describe('DevbioEditComponent', () => {
  let component: DevbioEditComponent;
  let fixture: ComponentFixture<DevbioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevbioEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevbioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
