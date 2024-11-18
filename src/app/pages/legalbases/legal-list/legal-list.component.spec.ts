import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalListComponent } from './legal-list.component';

describe('LegalListComponent', () => {
  let component: LegalListComponent;
  let fixture: ComponentFixture<LegalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
