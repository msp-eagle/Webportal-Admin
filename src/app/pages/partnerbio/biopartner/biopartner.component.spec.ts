import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiopartnerComponent } from './biopartner.component';

describe('BiopartnerComponent', () => {
  let component: BiopartnerComponent;
  let fixture: ComponentFixture<BiopartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiopartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiopartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
