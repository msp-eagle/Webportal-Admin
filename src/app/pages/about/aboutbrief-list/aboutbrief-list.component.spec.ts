import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbriefListComponent } from './aboutbrief-list.component';

describe('AboutbriefListComponent', () => {
  let component: AboutbriefListComponent;
  let fixture: ComponentFixture<AboutbriefListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutbriefListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutbriefListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
