import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparancyListComponent } from './transparancy-list.component';

describe('TransparancyListComponent', () => {
  let component: TransparancyListComponent;
  let fixture: ComponentFixture<TransparancyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransparancyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransparancyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
