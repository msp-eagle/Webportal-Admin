import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registerstep1CreateComponent } from './registerstep1-create.component';

describe('Registerstep1CreateComponent', () => {
  let component: Registerstep1CreateComponent;
  let fixture: ComponentFixture<Registerstep1CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Registerstep1CreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registerstep1CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
