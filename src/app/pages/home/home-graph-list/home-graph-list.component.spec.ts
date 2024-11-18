import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGraphListComponent } from './home-graph-list.component';

describe('HomeGraphListComponent', () => {
  let component: HomeGraphListComponent;
  let fixture: ComponentFixture<HomeGraphListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGraphListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGraphListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
