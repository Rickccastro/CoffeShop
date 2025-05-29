import { TestBed } from '@angular/core/testing';

import { CheckoutSessionsService } from './checkout-sessions.service';

describe('CheckoutSessionsService', () => {
  let service: CheckoutSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
