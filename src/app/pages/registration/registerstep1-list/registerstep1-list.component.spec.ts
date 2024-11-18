import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registerstep1ListComponent } from './registerstep1-list.component';

describe('Registerstep1ListComponent', () => {
  let component: Registerstep1ListComponent;
  let fixture: ComponentFixture<Registerstep1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registerstep1ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registerstep1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
