import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TspListComponent } from './tsp-list.component';

describe('TspListComponent', () => {
  let component: TspListComponent;
  let fixture: ComponentFixture<TspListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TspListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TspListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
