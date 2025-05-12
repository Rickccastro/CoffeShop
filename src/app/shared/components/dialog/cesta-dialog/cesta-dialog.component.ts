import { Component, inject, Inject, OnInit } from '@angular/core';
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
export class CestaDialogComponent implements OnInit {
  cardsList: Partial<CardDisplay>[] = [];
  dialogRef = inject(MatDialogRef);
  data = inject<{ cardList: Partial<CardDisplay>[]; cardOption: string }>(
    MAT_DIALOG_DATA
  );
  dialog = inject(MatDialog);

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
    this.dialogRef.close();
  }
}
