import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrxnDateRangeComponent } from './trxn-date-range.component';

describe('TrxnDateRangeComponent', () => {
  let component: TrxnDateRangeComponent;
  let fixture: ComponentFixture<TrxnDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrxnDateRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrxnDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
