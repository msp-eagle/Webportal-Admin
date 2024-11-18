import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiopartListComponent } from './biopart-list.component';

describe('BiopartListComponent', () => {
  let component: BiopartListComponent;
  let fixture: ComponentFixture<BiopartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiopartListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiopartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
