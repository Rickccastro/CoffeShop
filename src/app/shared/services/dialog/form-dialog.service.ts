import { inject, Injectable } from '@angular/core';
import { CestaDialogComponent } from '../../components/dialog/cesta-dialog/cesta-dialog.component';
import { CestaDialogService } from './cesta-dialog.service';
import { CardDisplay } from '../../../core/models/CardDisplay';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class FormDialogService {
    dialog = inject(MatDialog);
    cestaService = inject(CestaDialogService);

adicionaCesto(cardData: Partial<CardDisplay>): void {
  this.cestaService.addItem(cardData);
}
}
