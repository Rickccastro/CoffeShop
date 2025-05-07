import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../../card/card.component';
import { CardDisplay } from '../../../../core/models/CardDisplay';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CardComponent],
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.css'
})
export class FormDialogComponent {
  get cardData(): Partial<CardDisplay> {
    return this.data.cardData;
  }
  
  get buttonText(): string {
    return this.data.buttonText;
  }

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { cardData: Partial<CardDisplay>; cardOption: string; buttonText: string }
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  confirmPayment(): void {
    console.log('Pagamento confirmado para', this.data.cardData.title);
    this.dialogRef.close(true);
  }

  handleCardButtonClick(option: string): void {
    console.log('Botão clicado com opção:', option);
  }
}
