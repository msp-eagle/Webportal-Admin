import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalUpdateComponent } from './legal-update.component';

describe('LegalUpdateComponent', () => {
  let component: LegalUpdateComponent;
  let fixture: ComponentFixture<LegalUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
