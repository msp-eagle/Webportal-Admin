import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImageEditComponent } from './home-image-edit.component';

describe('HomeImageEditComponent', () => {
  let component: HomeImageEditComponent;
  let fixture: ComponentFixture<HomeImageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeImageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeImageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
