import { Component, inject, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CardDisplay } from '../../../../core/models/CardDisplay';
import { CardComponent } from '../../card/card.component';
import { PaymentLinkService } from '../../../services/payment/paymentlink.service';
import { PaymentItemDto } from '../../../../core/models/PaymentItemDto';
import { CheckoutSessionsService } from '../../../services/payment/checkout-sessions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cesta-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CardComponent],
  templateUrl: './cesta-dialog.component.html',
  styleUrl: './cesta-dialog.component.css',
})
export class CestaDialogComponent implements OnInit {
  cardsList: Partial<CardDisplay>[] = [];
  dialogRef = inject(MatDialogRef);
  data = inject<{ cardList: Partial<CardDisplay>[]; cardOption: string }>(
    MAT_DIALOG_DATA
  );
  dialog = inject(MatDialog);
  paymentItems: PaymentItemDto[] = [];

  paymentService = inject(PaymentLinkService); 
  checkoutService = inject(CheckoutSessionsService); 

  ngOnInit(): void {
    this.cardsList = this.data.cardList;
  }

  close(): void {
   this.dialogRef.close();
  }
  removerCesto(): void {
    this.cardsList.pop();
  }
  
finalizarPedido(): void {
  this.paymentItems = this.cardsList.map(card => ({
    priceId: card.priceId as string, 
    quantity: 1
  }));

  this.checkoutService.createCheckoutSessions(this.paymentItems).subscribe({
    next: (response) => {
      return response.clientSecret;
    },
    error: (err) => {
      console.error('Erro ao criar sessão de checkout', err);
    }
  });
}
}
