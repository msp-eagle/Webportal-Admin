import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TspComponent } from './tsp.component';

describe('TspComponent', () => {
  let component: TspComponent;
  let fixture: ComponentFixture<TspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TspComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
