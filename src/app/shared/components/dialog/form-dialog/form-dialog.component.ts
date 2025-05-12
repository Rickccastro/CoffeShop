  import { Component, inject, Inject} from '@angular/core';
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
  import { FormDialogService } from '../../../services/dialog/form-dialog.service';
  import { CestaDialogService } from '../../../services/dialog/cesta-dialog.service';

  @Component({
    selector: 'app-form-dialog',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, CardComponent],

    templateUrl: './form-dialog.component.html',
    styleUrl: './form-dialog.component.css',
  })
  export class FormDialogComponent {
    cardList: Partial<CardDisplay>[] = [];
    dialogRef = inject(MatDialogRef);
    formService = inject(FormDialogService);
    cestaService = inject(CestaDialogService);

    dialog = inject(MatDialog);
    data = inject<{ cardData: Partial<CardDisplay>; cardOption: string }>(MAT_DIALOG_DATA);

    get cardData() {
      return this.data.cardData;
    }

    adicionaCesto(): void {
      this.formService.adicionaCesto(this.data.cardData);
      // this.cardList.push(this.data.cardData);
      // return {
      //   cardList: this.cardList,
      //   cardOption: this.data.cardOption,
      // };
    }

    exibirCesto(): void {
      this.cestaService.exibirCesto();

      // console.log(this.cardList);
      // this.dialog.open(CestaDialogComponent, {
      //   data: { cardList: this.cardList },
      //   width: '600px',
      //   height: '400px',
      // });
    }

    close(): void {
      this.dialogRef.close();
    }
  }
