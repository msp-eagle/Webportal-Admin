import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevbioComponent } from './devbio.component';

describe('DevbioComponent', () => {
  let component: DevbioComponent;
  let fixture: ComponentFixture<DevbioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevbioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
