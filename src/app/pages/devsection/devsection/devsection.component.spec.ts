import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsectionComponent } from './devsection.component';

describe('DevsectionComponent', () => {
  let component: DevsectionComponent;
  let fixture: ComponentFixture<DevsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
