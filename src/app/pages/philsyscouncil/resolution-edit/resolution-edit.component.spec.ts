import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionEditComponent } from './resolution-edit.component';

describe('ResolutionEditComponent', () => {
  let component: ResolutionEditComponent;
  let fixture: ComponentFixture<ResolutionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolutionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
