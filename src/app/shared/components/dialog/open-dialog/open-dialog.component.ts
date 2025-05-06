import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';


@Component({
  selector: 'app-open-dialog',
  standalone: true,
  imports: [ButtonComponent,MatDialogModule],
  templateUrl: './open-dialog.component.html',
  styleUrl: './open-dialog.component.css'
})
export class OpenDialogComponent {
  showButton: boolean = true;
  dialog: MatDialog = inject(MatDialog);

  handleCardButtonClick(option: string) {
    if (option === 'pay') {
      this.dialog.open(FormDialogComponent, {
        width: '400px',
      });
    }
  }
}
