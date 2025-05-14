import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../../card/card.component';
import { CardDisplay } from '../../../../core/models/CardDisplay';
import { FormDialogService } from '../../../services/dialog/form-dialog.service';
import { CestaDialogService } from '../../../services/dialog/cesta-dialog.service';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CardComponent, MatIconModule],
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.css',
})
export class FormDialogComponent {
  cardList: Partial<CardDisplay>[] = [];
  dialogRef = inject(MatDialogRef);
  formService = inject(FormDialogService);
  cestaService = inject(CestaDialogService);

  dialog = inject(MatDialog);
  data = inject<{ cardData: Partial<CardDisplay>; cardOption: string }>(
    MAT_DIALOG_DATA
  );

  get cardData() {
    return this.data.cardData;
  }

  adicionaCesto(): void {
    this.formService.adicionaCesto(this.data.cardData);
  }

  exibirCesto(): void {
    this.cestaService.exibirCesto();
  }

  close(): void {
    this.dialogRef.close();
  }
}
