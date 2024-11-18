import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparancyCreateComponent } from './transparancy-create.component';

describe('TransparancyCreateComponent', () => {
  let component: TransparancyCreateComponent;
  let fixture: ComponentFixture<TransparancyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransparancyCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransparancyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
