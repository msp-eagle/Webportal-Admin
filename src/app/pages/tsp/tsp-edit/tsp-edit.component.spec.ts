import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TspEditComponent } from './tsp-edit.component';

describe('TspEditComponent', () => {
  let component: TspEditComponent;
  let fixture: ComponentFixture<TspEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TspEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TspEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
