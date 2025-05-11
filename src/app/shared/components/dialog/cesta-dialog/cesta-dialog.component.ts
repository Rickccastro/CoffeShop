import { Component, inject, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CardDisplay } from '../../../../core/models/CardDisplay';
import { ListProductsComponent } from '../../list-products/list-products.component';
import { CardComponent } from '../../card/card.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-cesta-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CardComponent],
  templateUrl: './cesta-dialog.component.html',
  styleUrl: './cesta-dialog.component.css',
})
export class CestaDialogComponent {
  cardsList: Partial<CardDisplay>[] = [];
    dialog = inject(MatDialog);
  

  constructor(
    public dialogRef: MatDialogRef<CestaDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      cardList: Partial<CardDisplay>[];
    }
  ) {
    console.log(data.cardList);
    this.cardsList = [...data.cardList]; // usando spread operator
    console.log(data.cardList);
  }

  close(): void {
    this.dialog.closeAll();
  }
  removerCesto(): void {
    this.cardsList.pop();
  }
  finalizarPedido(): void {
    this.dialogRef.close();
  }
}
