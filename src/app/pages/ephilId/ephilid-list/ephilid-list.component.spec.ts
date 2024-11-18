import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EphilidListComponent } from './ephilid-list.component';

describe('EphilidListComponent', () => {
  let component: EphilidListComponent;
  let fixture: ComponentFixture<EphilidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EphilidListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EphilidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
