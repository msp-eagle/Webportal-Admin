import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registerstep2UpdateComponent } from './registerstep2-update.component';

describe('Registerstep2UpdateComponent', () => {
  let component: Registerstep2UpdateComponent;
  let fixture: ComponentFixture<Registerstep2UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registerstep2UpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registerstep2UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
