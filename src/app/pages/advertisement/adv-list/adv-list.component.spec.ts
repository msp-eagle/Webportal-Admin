import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvListComponent } from './adv-list.component';

describe('AdvListComponent', () => {
  let component: AdvListComponent;
  let fixture: ComponentFixture<AdvListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
