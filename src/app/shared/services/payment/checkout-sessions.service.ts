import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PaymentItemDto } from '../../../core/models/PaymentItemDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutSessionsService {
  private clientSecret!: string;
  private paymentItems: { priceId: string; quantity: number }[] = [];

  httpClient = inject(HttpClient);

  setPaymentItems(items: { priceId: string; quantity: number }[]) {
    this.paymentItems = items;
  }

  getPaymentItems() {
    return this.paymentItems;
  }

  clearPaymentItems() {
    this.paymentItems = [];
  }

  setClientSecret(secret: string) {
    this.clientSecret = secret;
  }

  getClientSecret() {
    return this.clientSecret;
  }
  createCheckoutSessions(
    listProdutos: PaymentItemDto[]
  ): Observable<{ clientSecret: string }> {
    const payload = { items: listProdutos };
    return this.httpClient.post<{ clientSecret: string }>(
      'https://localhost:7087/CheckoutSession/create-checkout-session',
      payload
    );
  }
}
