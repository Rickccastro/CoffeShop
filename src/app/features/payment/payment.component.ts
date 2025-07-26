import { Component, OnDestroy, OnInit } from '@angular/core';
import { Stripe, StripeEmbeddedCheckout, loadStripe } from '@stripe/stripe-js';
import { firstValueFrom } from 'rxjs';
import { CheckoutSessionsService } from '../../shared/services/payment/checkout-sessions.service';
import { Environment } from '../../core/environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit, OnDestroy {
  private stripe: Stripe | null = null;
  private checkout: StripeEmbeddedCheckout | null = null;
  private isCheckoutMounted = false;
  private clientSecret: string = '';
  private checkoutSessionId: string = '';

  constructor(private checkoutService: CheckoutSessionsService) {}

  async ngOnInit() {
    const paymentItems = this.getPaymentItems();

    if (paymentItems.length === 0) {
      console.error('Nenhum item de pagamento encontrado');
      return;
    }

    const user = {
      UsrId: '1BE999F1-BA4C-4B48-97FA-9A89A40C7AA1',
      UsrIntCpf: '123456789',
      UsrIntPassword: '123456',
      UsrNm: 'rick2',
      UsrNmEndereco: 'rua example 123',
      EmailNm: 'rick2@gmail.com',
    };

    // Expira a sessão anterior (se existir)
    await this.expireCheckoutSession();

    // Inicializa checkout
    await this.initializeCheckout(paymentItems, user);
  }

  ngOnDestroy(): void {
    this.cleanupCheckoutInstance();
    // Fire-and-forget para expirar sessão
    this.expireCheckoutSession().catch((err) => {
      console.warn('Erro ao expirar sessão no ngOnDestroy', err);
    });
  }

  private getPaymentItems() {
    return this.checkoutService.getPaymentItems();
  }

  private async expireCheckoutSession(): Promise<void> {
    if (!this.checkoutSessionId) return;

    console.log('Expirando sessão de checkout:', this.checkoutSessionId);

    try {
      await firstValueFrom(this.checkoutService.expireSession(this.checkoutSessionId));
      console.log('Sessão expirada com sucesso.');
      this.checkoutSessionId = '';
    } catch (error) {
      console.error('Erro ao expirar sessão:', error);
    }
  }

  private async initializeCheckout(paymentItems: any[], user: any) {
    try {
      const response = await firstValueFrom(
        this.checkoutService.createCheckoutSessions(paymentItems, user)
      );
      await this.handleCheckoutSessionResponse(response);
    } catch (err) {
      console.error('Erro ao criar sessão de checkout', err);
    }
  }

  private async handleCheckoutSessionResponse(response: any) {
    this.clientSecret = response.clientSecret;
    this.checkoutSessionId = response.sessionId;
    console.log('Sessão de checkout criada com sucesso', response.sessionId);
    this.checkoutService.setClientSecret(this.clientSecret);

    await this.loadStripeInstance();
    await this.mountCheckout();
  }

  private async loadStripeInstance() {
    if (!this.stripe) {
      this.stripe = await loadStripe(Environment.APP_KEY);
      if (!this.stripe) {
        console.error('Erro ao carregar Stripe');
        throw new Error('Stripe não carregado');
      }
    }
  }

  private async cleanupCheckoutInstance() {
    if (this.checkout) {
      try {
        // Primeiro desmonta a UI
        this.checkout.unmount();
        // Depois destrói a instância
        await this.checkout.destroy();
      }
      catch (e) {
        console.warn('Erro ao fazer o cleanUp checkout:', e);
      }
      this.checkout = null;
      this.isCheckoutMounted = false;
    }
  }

  private async mountCheckout() {
    // Se já existir checkout montado, limpa ele antes de criar novo
    await this.cleanupCheckoutInstance();

    if (!this.stripe) {
      console.error('Stripe não carregado');
      return;
    }

    try {
      this.checkout = await this.stripe.initEmbeddedCheckout({
        clientSecret: this.clientSecret,
      });

      this.checkout.mount('#checkout');
      this.isCheckoutMounted = true;
    } catch (err) {
      console.error('Erro ao montar checkout:', err);
    }
  }
}
