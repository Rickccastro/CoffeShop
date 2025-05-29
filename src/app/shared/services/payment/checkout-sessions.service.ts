import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PaymentItemDto } from '../../../core/models/PaymentItemDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutSessionsService {
  httpClient = inject(HttpClient);


   createCheckoutSessions(listProdutos: PaymentItemDto[]): Observable<{ clientSecret: string }> {
    const payload = { items: listProdutos };
    return this.httpClient.post<{ clientSecret: string }>
    ('https://localhost:7087/CheckoutSession/create-checkout-session', payload);
  }
}
