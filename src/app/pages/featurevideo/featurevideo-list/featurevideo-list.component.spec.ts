import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturevideoListComponent } from './featurevideo-list.component';

describe('FeaturevideoListComponent', () => {
  let component: FeaturevideoListComponent;
  let fixture: ComponentFixture<FeaturevideoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturevideoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturevideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
