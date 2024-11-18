import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EphilidComponent } from './ephilid.component';

describe('EphilidComponent', () => {
  let component: EphilidComponent;
  let fixture: ComponentFixture<EphilidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EphilidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EphilidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
