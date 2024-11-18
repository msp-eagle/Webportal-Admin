import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsectionListComponent } from './devsection-list.component';

describe('DevsectionListComponent', () => {
  let component: DevsectionListComponent;
  let fixture: ComponentFixture<DevsectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevsectionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevsectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
