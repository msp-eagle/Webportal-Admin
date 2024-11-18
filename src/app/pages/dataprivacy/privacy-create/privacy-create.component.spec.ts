import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyCreateComponent } from './privacy-create.component';

describe('PrivacyCreateComponent', () => {
  let component: PrivacyCreateComponent;
  let fixture: ComponentFixture<PrivacyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
