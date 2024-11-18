import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturevideoEditComponent } from './featurevideo-edit.component';

describe('FeaturevideoEditComponent', () => {
  let component: FeaturevideoEditComponent;
  let fixture: ComponentFixture<FeaturevideoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturevideoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturevideoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
