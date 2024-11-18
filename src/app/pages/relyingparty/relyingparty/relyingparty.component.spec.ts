import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelyingpartyComponent } from './relyingparty.component';

describe('RelyingpartyComponent', () => {
  let component: RelyingpartyComponent;
  let fixture: ComponentFixture<RelyingpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelyingpartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelyingpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
