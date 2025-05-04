import { AfterViewInit, Component } from '@angular/core';
import { environment } from '@env';

declare const MercadoPago: any;

@Component({
  selector: 'app-paymentbrick',
  standalone: true,
  imports: [],
  templateUrl: './paymentbrick.component.html',
  styleUrl: './paymentbrick.component.css',
})
export class PaymentbrickComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initPaymentBrick();
  }

  private async initPaymentBrick(): Promise<void> {
    const mp = new MercadoPago(environment.keys.PUBLIC_KEY, {
      locale: 'pt-BR',
    });

    const response = await fetch('/api/create-preference', {
      method: 'POST',
    });
    const data = await response.json();

    const bricksBuilder = mp.bricks();

    const settings = {
      initialization: {
        amount: 10000,
        preferenceId: data.preferenceId,
        payer: {
          firstName: '',
          lastName: '',
          email: '',
          entityType: 'individual',
        },
      },
      customization: {
        visual: {
          style: {
            theme: 'default',
          },
        },
        paymentMethods: {
          creditCard: 'all',
          debitCard: 'all',
          ticket: 'all',
          bankTransfer: 'all',
          maxInstallments: 1,
        },
      },
      callbacks: {
        onReady: () => {
          // Brick pronto
        },
        onSubmit: ({ selectedPaymentMethod, formData }: any) => {
          return new Promise((resolve, reject) => {
            fetch('/api/process_payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            })
              .then((response) => response.json())
              .then((data) => resolve(data))
              .catch((error) => {
                console.error(error);
                reject();
              });
          });
        },
        onError: (error: any) => {
          console.error('Erro no Brick:', error);
        },
      },
    };

    await bricksBuilder.create('payment', 'paymentBrick_container', settings);
  }
}
