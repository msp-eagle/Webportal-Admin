import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteragenctListComponent } from './interagenct-list.component';

describe('InteragenctListComponent', () => {
  let component: InteragenctListComponent;
  let fixture: ComponentFixture<InteragenctListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteragenctListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteragenctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
