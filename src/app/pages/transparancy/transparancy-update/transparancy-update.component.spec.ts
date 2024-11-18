import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparancyUpdateComponent } from './transparancy-update.component';

describe('TransparancyUpdateComponent', () => {
  let component: TransparancyUpdateComponent;
  let fixture: ComponentFixture<TransparancyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransparancyUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransparancyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
