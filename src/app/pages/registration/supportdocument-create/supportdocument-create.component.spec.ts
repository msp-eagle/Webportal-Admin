import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportdocumentCreateComponent } from './supportdocument-create.component';

describe('SupportdocumentCreateComponent', () => {
  let component: SupportdocumentCreateComponent;
  let fixture: ComponentFixture<SupportdocumentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportdocumentCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportdocumentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
