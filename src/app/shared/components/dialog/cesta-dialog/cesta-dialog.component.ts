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
import { PaymentItemDto } from '../../../../core/models/DTO/PaymentItemDto';
import { CheckoutSessionsService } from '../../../services/payment/checkout-sessions.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cesta-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CardComponent],
  templateUrl: './cesta-dialog.component.html',
  styleUrl: './cesta-dialog.component.css',
})
export class CestaDialogComponent implements OnInit {
  cardsList: Partial<CardDisplay>[] = [];
  paymentItems: PaymentItemDto[] = [];

  dialogRef = inject(MatDialogRef);
  data = inject<{ cardList: Partial<CardDisplay>[]; cardOption: string }>(
    MAT_DIALOG_DATA
  );
  router = inject(Router);
  dialog = inject(MatDialog);
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
    this.paymentItems = this.cardsList.map((card) => ({
      produtoId: card.id as string, // ID do produto
      // name: card.title as string, // Nome do produto
      // description: card.subtitle as string, // Descrição do produto
      quantity: 1,
      // amount: 10, // Valor do produto
    }));
    this.checkoutService.setPaymentItems(this.paymentItems);
    this.dialog.closeAll();
    this.router.navigate(['/payment']);
  }
}
