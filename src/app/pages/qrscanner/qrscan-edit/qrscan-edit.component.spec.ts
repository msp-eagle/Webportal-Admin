import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrscanEditComponent } from './qrscan-edit.component';

describe('QrscanEditComponent', () => {
  let component: QrscanEditComponent;
  let fixture: ComponentFixture<QrscanEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrscanEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrscanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
