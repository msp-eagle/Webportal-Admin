import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registerstep1UpdateComponent } from './registerstep1-update.component';

describe('Registerstep1UpdateComponent', () => {
  let component: Registerstep1UpdateComponent;
  let fixture: ComponentFixture<Registerstep1UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registerstep1UpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registerstep1UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
