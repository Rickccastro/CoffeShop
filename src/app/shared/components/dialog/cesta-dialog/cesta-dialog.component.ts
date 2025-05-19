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
  this.paymentService.getPaymentLink(this.paymentItems);
}
}
