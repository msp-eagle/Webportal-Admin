import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiopartEditComponent } from './biopart-edit.component';

describe('BiopartEditComponent', () => {
  let component: BiopartEditComponent;
  let fixture: ComponentFixture<BiopartEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiopartEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiopartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
