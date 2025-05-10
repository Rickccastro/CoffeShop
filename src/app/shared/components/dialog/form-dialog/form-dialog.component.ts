import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../../card/card.component';
import { CardDisplay } from '../../../../core/models/CardDisplay';
import { CestaDialogComponent } from '../cesta-dialog/cesta-dialog.component';
import { ListProductsComponent } from '../../list-products/list-products.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CardComponent],

  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.css',
})
export class FormDialogComponent {
  cardList: Partial<CardDisplay>[] = [];
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { cardData: Partial<CardDisplay>; cardOption: string },
    private dialog: MatDialog
  ) {}

  get cardData() {
    return this.data.cardData;
  }

  adicionaCesto(): { cardList: Partial<CardDisplay>[]; cardOption: string } {
    this.cardList.push(this.data.cardData);
    return {
      cardList: this.cardList,
      cardOption: this.data.cardOption,
    };
  }

  exibirCesto(): void {
    console.log(this.cardList);
    this.dialog.open(CestaDialogComponent, {
      data: { cardList: this.cardList },
      width: '600px',
      height: '400px',
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
