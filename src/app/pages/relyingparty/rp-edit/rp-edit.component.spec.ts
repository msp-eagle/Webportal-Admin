import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpEditComponent } from './rp-edit.component';

describe('RpEditComponent', () => {
  let component: RpEditComponent;
  let fixture: ComponentFixture<RpEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
