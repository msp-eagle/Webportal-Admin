import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkycEditComponent } from './ekyc-edit.component';

describe('EkycEditComponent', () => {
  let component: EkycEditComponent;
  let fixture: ComponentFixture<EkycEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkycEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkycEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
