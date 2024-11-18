import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportdocumentListComponent } from './supportdocument-list.component';

describe('SupportdocumentListComponent', () => {
  let component: SupportdocumentListComponent;
  let fixture: ComponentFixture<SupportdocumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportdocumentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportdocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
