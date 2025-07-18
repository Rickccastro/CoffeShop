import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PaymentItemDto } from '../../../core/models/DTO/PaymentItemDto';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../../core/models/User/User';

@Injectable({
  providedIn: 'root',
})
export class CheckoutSessionsService {
  private clientSecret!: string;
  private paymentItems: PaymentItemDto[] = [];
  router= inject(Router) 

  httpClient = inject(HttpClient);

  setPaymentItems(items: PaymentItemDto[]) {
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
    listProdutos: PaymentItemDto[], user: User
  ): Observable<{ clientSecret: string }> {
    console.log('Criando sessão de checkout com os seguintes itens:', listProdutos);
    const payload = { userId: user.id, items: listProdutos };
    return this.httpClient.post<{ clientSecret: string }>(
      'https://localhost:7087/CheckoutSession/create-checkout-session',
      payload
    );
  }

  createSessionStatus (sessionId: string){
    return  this.httpClient.get<any>(`/session-status?session_id=${sessionId}`).subscribe({
      next: (session) => {
        if (session.status === 'open') {
          console.log('Cancelado');
          // this.router.navigate(['/']);
        } else if (session.status === 'complete') {
          console.log('Sucesso');
        }
      },
      error: (err) => {
        console.error('Erro ao obter status da sessão', err);
      },
    });
  }
}
