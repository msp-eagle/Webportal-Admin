import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturevideoCreateComponent } from './featurevideo-create.component';

describe('FeaturevideoCreateComponent', () => {
  let component: FeaturevideoCreateComponent;
  let fixture: ComponentFixture<FeaturevideoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturevideoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturevideoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
