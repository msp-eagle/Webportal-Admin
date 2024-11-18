import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EphilidFaqEditComponent } from './ephilid-faq-edit.component';

describe('EphilidFaqEditComponent', () => {
  let component: EphilidFaqEditComponent;
  let fixture: ComponentFixture<EphilidFaqEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EphilidFaqEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EphilidFaqEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
