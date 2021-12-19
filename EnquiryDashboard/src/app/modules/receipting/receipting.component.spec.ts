import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptingComponent } from './receipting.component';

describe('ReceiptingComponent', () => {
  let component: ReceiptingComponent;
  let fixture: ComponentFixture<ReceiptingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
