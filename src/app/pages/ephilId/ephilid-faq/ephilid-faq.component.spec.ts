import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EphilidFaqComponent } from './ephilid-faq.component';

describe('EphilidFaqComponent', () => {
  let component: EphilidFaqComponent;
  let fixture: ComponentFixture<EphilidFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EphilidFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EphilidFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
