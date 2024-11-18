import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilypscheckListComponent } from './philypscheck-list.component';

describe('PhilypscheckListComponent', () => {
  let component: PhilypscheckListComponent;
  let fixture: ComponentFixture<PhilypscheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilypscheckListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhilypscheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
