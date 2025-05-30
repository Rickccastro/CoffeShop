import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutReturnComponent } from './checkout-return.component';

describe('CheckoutReturnComponent', () => {
  let component: CheckoutReturnComponent;
  let fixture: ComponentFixture<CheckoutReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutReturnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckoutReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
