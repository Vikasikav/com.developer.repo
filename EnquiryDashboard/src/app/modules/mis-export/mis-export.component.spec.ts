import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisExportComponent } from './mis-export.component';

describe('MisExportComponent', () => {
  let component: MisExportComponent;
  let fixture: ComponentFixture<MisExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
