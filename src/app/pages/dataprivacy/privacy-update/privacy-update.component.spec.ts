import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyUpdateComponent } from './privacy-update.component';

describe('PrivacyUpdateComponent', () => {
  let component: PrivacyUpdateComponent;
  let fixture: ComponentFixture<PrivacyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
