import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FssRefundComponent } from './fss-refund.component';

describe('FssRefundComponent', () => {
  let component: FssRefundComponent;
  let fixture: ComponentFixture<FssRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FssRefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FssRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
