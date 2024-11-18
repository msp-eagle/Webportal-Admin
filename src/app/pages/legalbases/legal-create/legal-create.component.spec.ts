import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalCreateComponent } from './legal-create.component';

describe('LegalCreateComponent', () => {
  let component: LegalCreateComponent;
  let fixture: ComponentFixture<LegalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
