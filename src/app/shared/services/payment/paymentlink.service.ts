import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PaymentItemDto } from '../../../core/models/DTO/PaymentItemDto';

@Injectable({
  providedIn: 'root',
})
export class PaymentLinkService {
  httpClient = inject(HttpClient);

  //  getPrices(listProdutos :Partial<CardDisplay>[]){
  //    return this.httpClient.post<any>('/api/Prices', listProdutos);
  //  }

  getPaymentLink(listProdutos: PaymentItemDto[]) {
    const payload = { items: listProdutos };

    this.httpClient
      .post<any>('https://localhost:7087/PaymentLink', payload)
      .subscribe({
        next: (response) => {
          if (response && response.url) {
            window.open(response.url, '_blank');
          } else {
            console.error('URL não encontrada na resposta:', response);
          }
        },
        error: (err) => {
          console.error('Erro ao gerar o link de pagamento:', err);
        },
      });
  }
}
