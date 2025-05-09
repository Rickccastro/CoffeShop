import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatDialog
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../../card/card.component';
import { CardDisplay } from '../../../../core/models/CardDisplay';
import { CestaDialogComponent } from '../cesta-dialog/cesta-dialog.component';
import { ListProductsComponent } from '../../list-products/list-products.component';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    CardComponent, 
    CestaDialogComponent,
    MatDialogModule
  ],
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.css'
})
export class FormDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { cardData: Partial<CardDisplay>; cardOption: string; },
    private dialog: MatDialog
  ) {}

  get cardData() {
    return this.data.cardData;
  }

  adicionaCesto(): { cardData: Partial<CardDisplay>; cardOption: string } {
   return {
    cardData: this.data.cardData, 
    cardOption: this.data.cardOption
  };
  }
  
  exibirCesto(): void {
    this.dialog.open(CestaDialogComponent, {
      data: this.adicionaCesto(),
      width: '600px',
      height: '400px',
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
