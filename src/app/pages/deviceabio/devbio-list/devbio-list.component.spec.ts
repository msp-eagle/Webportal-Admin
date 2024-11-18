import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevbioListComponent } from './devbio-list.component';

describe('DevbioListComponent', () => {
  let component: DevbioListComponent;
  let fixture: ComponentFixture<DevbioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevbioListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevbioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
