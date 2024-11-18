import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteragencyComponent } from './interagency.component';

describe('InteragencyComponent', () => {
  let component: InteragencyComponent;
  let fixture: ComponentFixture<InteragencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteragencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteragencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
