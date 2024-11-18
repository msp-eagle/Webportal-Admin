import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EphilidFaqListComponent } from './ephilid-faq-list.component';

describe('EphilidFaqListComponent', () => {
  let component: EphilidFaqListComponent;
  let fixture: ComponentFixture<EphilidFaqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EphilidFaqListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EphilidFaqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
