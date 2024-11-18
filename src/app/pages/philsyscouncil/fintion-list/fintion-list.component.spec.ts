import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FintionListComponent } from './fintion-list.component';

describe('FintionListComponent', () => {
  let component: FintionListComponent;
  let fixture: ComponentFixture<FintionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FintionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FintionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
