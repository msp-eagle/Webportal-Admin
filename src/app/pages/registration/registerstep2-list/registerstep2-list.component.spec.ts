import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registerstep2ListComponent } from './registerstep2-list.component';

describe('Registerstep2ListComponent', () => {
  let component: Registerstep2ListComponent;
  let fixture: ComponentFixture<Registerstep2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registerstep2ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registerstep2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
