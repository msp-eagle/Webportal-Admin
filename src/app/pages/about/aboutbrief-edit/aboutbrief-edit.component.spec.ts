import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbriefEditComponent } from './aboutbrief-edit.component';

describe('AboutbriefEditComponent', () => {
  let component: AboutbriefEditComponent;
  let fixture: ComponentFixture<AboutbriefEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutbriefEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutbriefEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
