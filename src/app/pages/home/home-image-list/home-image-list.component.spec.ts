import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImageListComponent } from './home-image-list.component';

describe('HomeImageListComponent', () => {
  let component: HomeImageListComponent;
  let fixture: ComponentFixture<HomeImageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeImageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
