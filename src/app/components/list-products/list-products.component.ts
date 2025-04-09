import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardDisplay } from '../../models/CardDisplay'; 



  @Component({
    selector: 'app-list-products',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './list-products.component.html',
    styleUrl: './list-products.component.css'
  })
  export class ListProductsComponent {
    @Input() cardsList: CardDisplay[] = [];
    @Input() cardOption: 'small' | 'default' = 'default';
  }
