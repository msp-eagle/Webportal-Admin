import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolitionListComponent } from './resolition-list.component';

describe('ResolitionListComponent', () => {
  let component: ResolitionListComponent;
  let fixture: ComponentFixture<ResolitionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolitionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolitionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
