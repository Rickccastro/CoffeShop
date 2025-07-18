import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-code-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './email-code-dialog.component.html',
  styleUrl: './email-code-dialog.component.css'
})
export class EmailCodeDialogComponent {
  router = inject(Router);
    dialog = inject(MatDialog);
    dialogRef = inject(MatDialogRef);
  
  close(): void {
    this.dialogRef.close();
  }

    enviarToken(): void {
    // this.paymentItems = this.cardsList.map((card) => ({
    //   produtoId: card.id as string, // ID do produto
    //   // name: card.title as string, // Nome do produto
    //   // description: card.subtitle as string, // Descrição do produto
    //   quantity: 1,
    //   // amount: 10, // Valor do produto
    // }));
    // this.checkoutService.setPaymentItems(this.paymentItems);
    this.dialog.closeAll();
    this.router.navigate(['/']);
  }
}
