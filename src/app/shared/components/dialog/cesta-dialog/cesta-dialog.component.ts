import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CardDisplay } from '../../../../core/models/CardDisplay';
import { ListProductsComponent } from "../../list-products/list-products.component";

@Component({
  selector: 'app-cesta-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, ListProductsComponent],
  templateUrl: './cesta-dialog.component.html',
  styleUrl: './cesta-dialog.component.css'
})
export class CestaDialogComponent {
    cardsList: Partial<CardDisplay>[] = [];

    constructor(
      public dialogRef: MatDialogRef<CestaDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: {
        cardData: Partial<CardDisplay>;  
        cardOption: string;
      }
    ) {
      console.log(data.cardData);
      this.cardsList.push(data.cardData);
    }
  
    close(): void {
      this.dialogRef.close();
    }
    removerCesto(): void {
      // implementar remoção…
    }
    finalizarPedido(): void {
      this.dialogRef.close();
    }
}
