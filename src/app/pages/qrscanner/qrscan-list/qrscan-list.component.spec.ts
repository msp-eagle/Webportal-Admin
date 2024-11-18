import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrscanListComponent } from './qrscan-list.component';

describe('QrscanListComponent', () => {
  let component: QrscanListComponent;
  let fixture: ComponentFixture<QrscanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrscanListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrscanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
