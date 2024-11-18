import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyListComponent } from './privacy-list.component';

describe('PrivacyListComponent', () => {
  let component: PrivacyListComponent;
  let fixture: ComponentFixture<PrivacyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
