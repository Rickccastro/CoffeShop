import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { StripeEmbeddedCheckout, loadStripe, Stripe } from '@stripe/stripe-js';
import { CheckoutSessionsService } from '../../shared/services/payment/checkout-sessions.service';
import { CestaDialogComponent } from '../../shared/components/dialog/cesta-dialog/cesta-dialog.component';

import { Environment } from '../../core/environments/enviroments'

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
  checkoutService = inject(CheckoutSessionsService);
  cestaDialogComponent = inject(CestaDialogComponent);

  constructor() {}

  async ngOnInit() {
    this.stripe = await loadStripe(Environment.APP_KEY);
  }

  async ngAfterViewInit() {
    if (!this.stripe) {
      console.error('Stripe failed to load');
      return;
    }

    // const fetchClientSecret = async (): Promise<string> => {
    //   return new Promise<string>((resolve, reject) => {
    //     this.cestaDialogComponent.finalizarPedido().subscribe({
    //       next: (result: { clientSecret: string }) => resolve(result.clientSecret),
    //       error: (err: any) => reject(err)
    //     });
    //   });
    // };

    // this.checkout = await this.stripe.initEmbeddedCheckout({
    //   fetchClientSecret,
    // });

    // this.checkout.mount('#checkout');
  }
}
