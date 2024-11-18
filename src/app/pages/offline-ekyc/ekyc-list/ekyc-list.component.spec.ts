import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkycListComponent } from './ekyc-list.component';

describe('EkycListComponent', () => {
  let component: EkycListComponent;
  let fixture: ComponentFixture<EkycListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkycListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkycListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
