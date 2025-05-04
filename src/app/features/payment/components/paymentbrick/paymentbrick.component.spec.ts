import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentbrickComponent } from './paymentbrick.component';

describe('PaymentbrickComponent', () => {
  let component: PaymentbrickComponent;
  let fixture: ComponentFixture<PaymentbrickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentbrickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentbrickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
