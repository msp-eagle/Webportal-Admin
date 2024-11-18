import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsectionEditComponent } from './devsection-edit.component';

describe('DevsectionEditComponent', () => {
  let component: DevsectionEditComponent;
  let fixture: ComponentFixture<DevsectionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevsectionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevsectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
