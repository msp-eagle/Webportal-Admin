import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbriefComponent } from './aboutbrief.component';

describe('AboutbriefComponent', () => {
  let component: AboutbriefComponent;
  let fixture: ComponentFixture<AboutbriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutbriefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutbriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
