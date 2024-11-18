import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registerstep2CreateComponent } from './registerstep2-create.component';

describe('Registerstep2CreateComponent', () => {
  let component: Registerstep2CreateComponent;
  let fixture: ComponentFixture<Registerstep2CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registerstep2CreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registerstep2CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
