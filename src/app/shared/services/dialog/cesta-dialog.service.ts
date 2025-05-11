import { inject, Injectable } from '@angular/core';
import { CardDisplay } from '../../../core/models/CardDisplay';
import { CestaDialogComponent } from '../../components/dialog/cesta-dialog/cesta-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class CestaDialogService {
 private items: Partial<CardDisplay>[] = [];
 dialog = inject(MatDialog);
 

  getItems(): Partial<CardDisplay>[] {
    return this.items;
  }

  addItem(item: Partial<CardDisplay>) {
    this.items.push(item);
  }

  exibirCesto(): void {
  this.dialog.open(CestaDialogComponent, {
    data: { cardList: this.getItems() },
    width: '600px',
    height: '400px',
  });
}

  clear() {
    this.items = [];
  }
}
