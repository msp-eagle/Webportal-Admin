import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGraphEditComponent } from './home-graph-edit.component';

describe('HomeGraphEditComponent', () => {
  let component: HomeGraphEditComponent;
  let fixture: ComponentFixture<HomeGraphEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGraphEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGraphEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
