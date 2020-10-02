import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollIncludeComponent } from './payroll-include.component';

describe('PayrollIncludeComponent', () => {
  let component: PayrollIncludeComponent;
  let fixture: ComponentFixture<PayrollIncludeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollIncludeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollIncludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
