import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportdocumentUpdateComponent } from './supportdocument-update.component';

describe('SupportdocumentUpdateComponent', () => {
  let component: SupportdocumentUpdateComponent;
  let fixture: ComponentFixture<SupportdocumentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportdocumentUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportdocumentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
