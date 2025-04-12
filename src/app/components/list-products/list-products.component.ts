import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardDisplay } from '../../models/CardDisplay';
import { ButtonComponent } from "../button/button.component"; 



  @Component({
    selector: 'app-list-products',
    standalone: true,
    imports: [CardComponent, ButtonComponent],
    templateUrl: './list-products.component.html',
    styleUrl: './list-products.component.css'
  })
  export class ListProductsComponent {
    @Input() cardsList: CardDisplay[] = [];
    @Input() cardOption: 'small' | 'default' = 'default';

    currentIndex = 0;
    visibleCards = 4; 

    prev(): void {
      this.currentIndex = Math.max(0, this.currentIndex - 1);
    }
  
    next(): void {
      this.currentIndex = Math.min(
        this.cardsList.length - this.visibleCards, 
        this.currentIndex + 1
      );
    }

    hasVisibleCardsWithShowButton(): boolean {
      return this.visibleCardsList.some(card => card.showButton === true);
    }
  
    get visibleCardsList(): any[] {
      return this.cardsList.slice(this.currentIndex, this.currentIndex + this.visibleCards);
    }
  }
