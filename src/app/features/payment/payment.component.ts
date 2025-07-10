import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { StripeEmbeddedCheckout, loadStripe, Stripe } from '@stripe/stripe-js';
import { CheckoutSessionsService } from '../../shared/services/payment/checkout-sessions.service';
import { CestaDialogComponent } from '../../shared/components/dialog/cesta-dialog/cesta-dialog.component';

import { Environment } from '../../core/environments/environment';
import { User } from '../../core/models/User/User';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent implements OnInit, AfterViewInit {
  stripe: Stripe | null = null;
  checkout: StripeEmbeddedCheckout | null = null;
  clientSecret!: string;
  checkoutService = inject(CheckoutSessionsService);

  async ngOnInit() {
    const paymentItems = this.getPaymentItems();

    if (!paymentItems.length) {
      console.error('Nenhum item de pagamento encontrado');
      return;
    }

    const user: User = {
      id: '1BE999F1-BA4C-4B48-97FA-9A89A40C7AA1',
      cpf: '123456789',
      senha: '123456',
      nome: 'rick2',
      endereco: 'rua example 123',
      email: 'rick2@gmail.com',
    };

    await this.initializeCheckout(paymentItems, user);
  }

  private getPaymentItems() {
    return this.checkoutService.getPaymentItems();
  }

  private async initializeCheckout(paymentItems: any[], user: User) {
    this.checkoutService.createCheckoutSessions(paymentItems, user).subscribe({
      next: async (response) => {
        this.handleCheckoutSessionResponse(response);
      },
      error: (err) => {
        console.error('Erro ao criar sessão de checkout', err);
      },
    });
  }

  private async handleCheckoutSessionResponse(response: any) {
    this.clientSecret = response.clientSecret;
    this.checkoutService.setClientSecret(this.clientSecret);

    await this.loadStripeInstance();
    await this.mountCheckout();
  }

  private async loadStripeInstance() {
    this.stripe = await loadStripe(Environment.APP_KEY);

    if (!this.stripe) {
      console.error('Erro ao carregar Stripe');
      throw new Error('Stripe não carregado');
    }
  }

  async ngAfterViewInit() {
    this.mountCheckout();
  }

  async mountCheckout() {
    if (!this.stripe) {
      console.error('Stripe não carregado');
      return;
    }

    this.checkout = await this.stripe.initEmbeddedCheckout({
      clientSecret: this.clientSecret,
    });

    this.checkout.mount('#checkout');
  }
}
