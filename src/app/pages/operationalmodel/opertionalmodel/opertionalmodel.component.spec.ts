import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpertionalmodelComponent } from './opertionalmodel.component';

describe('OpertionalmodelComponent', () => {
  let component: OpertionalmodelComponent;
  let fixture: ComponentFixture<OpertionalmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpertionalmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpertionalmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
