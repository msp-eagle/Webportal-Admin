import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EphilidEditComponent } from './ephilid-edit.component';

describe('EphilidEditComponent', () => {
  let component: EphilidEditComponent;
  let fixture: ComponentFixture<EphilidEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EphilidEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EphilidEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
