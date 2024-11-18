import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperListComponent } from './oper-list.component';

describe('OperListComponent', () => {
  let component: OperListComponent;
  let fixture: ComponentFixture<OperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
